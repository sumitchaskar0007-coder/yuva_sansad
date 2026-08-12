import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaArrowLeft, FaCalendarAlt, FaCloudUploadAlt, FaEdit, FaEye, FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import { eventAPI } from "../../api";

const emptyForm = { title: "", category: "Yuva Sansad", eventDate: "", description: "", details: "", imageUrl: "", isPublished: "true" };

export default function EventAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [imageMode, setImageMode] = useState("upload");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  const load = async () => {
    try {
      const { data } = await eventAPI.getAllAdmin();
      setItems(Array.isArray(data) ? data : []);
    } catch (error) { toast.error(error.response?.data?.message || "Failed to load events"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);
  useEffect(() => () => { if (preview.startsWith("blob:")) URL.revokeObjectURL(preview); }, [preview]);

  const close = () => {
    setOpen(false); setEditing(null); setForm(emptyForm); setImageFile(null); setPreview(""); setImageMode("upload");
  };
  const create = () => { close(); setOpen(true); };
  const edit = (item) => {
    setEditing(item);
    setForm({
      title: item.title, category: item.category, eventDate: item.eventDate?.slice(0, 10) || "",
      description: item.description, details: item.details, imageUrl: "", isPublished: String(item.isPublished),
    });
    setImageFile(null); setPreview(item.imageUrl); setImageMode(item.cloudinaryId ? "upload" : "url"); setOpen(true);
  };
  const change = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const selectFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp", "image/gif"].includes(file.type)) return toast.error("Use a JPG, PNG, WebP, or GIF image");
    if (file.size > 10 * 1024 * 1024) return toast.error("Image must be smaller than 10 MB");
    setImageFile(file); setPreview(URL.createObjectURL(file));
  };
  const submit = async (event) => {
    event.preventDefault();
    if (!editing && imageMode === "upload" && !imageFile) return toast.error("Select an event image");
    if (!editing && imageMode === "url" && !form.imageUrl.trim()) return toast.error("Enter an event image URL");
    const data = new FormData();
    ["title", "category", "eventDate", "description", "details", "isPublished"].forEach((key) => data.append(key, form[key]));
    if (imageMode === "upload" && imageFile) data.append("image", imageFile);
    if (imageMode === "url" && form.imageUrl.trim()) data.append("imageUrl", form.imageUrl.trim());
    setSaving(true);
    try {
      if (editing) await eventAPI.update(editing._id, data); else await eventAPI.create(data);
      toast.success(editing ? "Event updated" : form.isPublished === "true" ? "Event published" : "Event saved as draft");
      close(); await load();
    } catch (error) { toast.error(error.response?.data?.message || "Unable to save event"); }
    finally { setSaving(false); }
  };
  const toggle = async (item) => {
    try {
      const { data } = await eventAPI.setPublished(item._id, !item.isPublished);
      setItems((current) => current.map((value) => value._id === item._id ? data : value));
      toast.success(data.isPublished ? "Event published" : "Event moved to drafts");
    } catch (error) { toast.error(error.response?.data?.message || "Status could not be changed"); }
  };
  const remove = async (item) => {
    if (!window.confirm(`Delete “${item.title}”? This cannot be undone.`)) return;
    try { await eventAPI.delete(item._id); setItems((current) => current.filter((value) => value._id !== item._id)); toast.success("Event deleted"); }
    catch (error) { toast.error(error.response?.data?.message || "Event could not be deleted"); }
  };
  const formatDate = (value) => new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(new Date(value));

  return (
    <div className="min-h-screen bg-[#f5f3f1] pb-16 pt-10">
      <header className="border-y bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div><Link to="/admin/dashboard" className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#7b1d1d]"><FaArrowLeft /> Back to dashboard</Link><h1 className="text-2xl font-bold text-[#0a2a66]">Event Management</h1><p className="mt-1 text-sm text-gray-500">Add events using an uploaded photo or image URL.</p></div>
          <button onClick={create} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7b1d1d] px-5 py-3 font-bold text-white shadow-md"><FaPlus /> Add event</button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6 flex flex-wrap gap-3"><span className="rounded-xl bg-white px-4 py-3 text-sm font-semibold shadow-sm">Total <strong className="ml-2 text-[#0a2a66]">{items.length}</strong></span><span className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">Published <strong className="ml-2">{items.filter((item) => item.isPublished).length}</strong></span><span className="rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">Drafts <strong className="ml-2">{items.filter((item) => !item.isPublished).length}</strong></span></div>
        {loading ? <div className="flex min-h-64 items-center justify-center"><div className="h-10 w-10 animate-spin rounded-full border-4 border-red-100 border-t-[#7b1d1d]" /></div> : items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-16 text-center"><FaCalendarAlt className="mx-auto text-4xl text-gray-300" /><h2 className="mt-4 text-xl font-bold">No managed events yet</h2><button onClick={create} className="mt-5 rounded-lg bg-[#7b1d1d] px-4 py-2 font-bold text-white">Add your first event</button></div>
        ) : <div className="overflow-hidden rounded-2xl border bg-white shadow-sm"><div className="divide-y">{items.map((item) => (
          <article key={item._id} className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center"><img src={item.imageUrl} alt={item.title} className="h-32 w-full rounded-xl object-cover sm:h-24 sm:w-36" /><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${item.isPublished ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}>{item.isPublished ? "Published" : "Draft"}</span><span className="text-xs text-gray-400">{item.category} · {formatDate(item.eventDate)}</span></div><h2 className="mt-2 truncate text-lg font-bold text-[#0a2a66]">{item.title}</h2><p className="mt-1 line-clamp-1 text-sm text-gray-500">{item.description}</p></div><div className="flex flex-wrap gap-2">{item.isPublished && <Link to={`/events/${item._id}`} target="_blank" className="rounded-lg border p-2.5 text-gray-600" aria-label="View event"><FaEye /></Link>}<button onClick={() => edit(item)} className="rounded-lg bg-[#0a2a66] p-2.5 text-white" aria-label="Edit event"><FaEdit /></button><button onClick={() => toggle(item)} className={`rounded-lg px-3 py-2 text-xs font-bold ${item.isPublished ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"}`}>{item.isPublished ? "Unpublish" : "Publish"}</button><button onClick={() => remove(item)} className="rounded-lg border border-red-200 p-2.5 text-red-700" aria-label="Delete event"><FaTrash /></button></div></article>
        ))}</div></div>}
      </main>

      {open && <div className="fixed inset-0 z-[80] overflow-y-auto bg-gray-950/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true"><div className="mx-auto my-6 max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"><div className="flex items-center justify-between border-b px-6 py-5"><div><h2 className="text-xl font-bold text-[#0a2a66]">{editing ? "Edit event" : "Create event"}</h2><p className="text-sm text-gray-500">Event information shown on the website.</p></div><button onClick={close} className="rounded-full p-2 text-gray-400 hover:bg-gray-100" aria-label="Close"><FaTimes /></button></div>
        <form onSubmit={submit} className="space-y-5 p-6">
          <div className="grid gap-5 sm:grid-cols-2"><Field label="Title *"><input name="title" value={form.title} onChange={change} maxLength={180} required className="field" /></Field><Field label="Category *"><input name="category" value={form.category} onChange={change} maxLength={80} required className="field" /></Field></div>
          <Field label="Event date *"><input type="date" name="eventDate" value={form.eventDate} onChange={change} required className="field" /></Field>
          <Field label="Short description *"><textarea name="description" value={form.description} onChange={change} maxLength={1000} rows={3} required className="field resize-y" /></Field>
          <Field label="Full event details *"><textarea name="details" value={form.details} onChange={change} maxLength={10000} rows={6} required className="field resize-y" /></Field>
          <div><span className="mb-2 block text-sm font-bold text-gray-700">Event photo {editing ? "(optional replacement)" : "*"}</span><div className="mb-3 flex rounded-xl bg-gray-100 p-1"><button type="button" onClick={() => setImageMode("upload")} className={`flex-1 rounded-lg px-4 py-2 text-sm font-bold ${imageMode === "upload" ? "bg-white text-[#0a2a66] shadow" : "text-gray-500"}`}>Upload</button><button type="button" onClick={() => setImageMode("url")} className={`flex-1 rounded-lg px-4 py-2 text-sm font-bold ${imageMode === "url" ? "bg-white text-[#0a2a66] shadow" : "text-gray-500"}`}>Image URL</button></div>{imageMode === "upload" ? <><label htmlFor="event-image" className="flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed bg-gray-50 p-6 text-center"><FaCloudUploadAlt className="mb-2 text-3xl text-[#7b1d1d]" /><span className="text-sm font-semibold">{imageFile?.name || "Choose an image"}</span><span className="mt-1 text-xs text-gray-500">JPG, PNG, WebP, or GIF · Max 10 MB</span></label><input id="event-image" type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={selectFile} className="sr-only" /></> : <input type="url" name="imageUrl" value={form.imageUrl} onChange={(event) => { change(event); setPreview(event.target.value); }} placeholder="https://example.com/event.jpg" className="field" />}{preview && <img src={preview} alt="Event preview" className="mt-4 max-h-64 w-full rounded-xl object-cover" />}</div>
          <Field label="Status"><select name="isPublished" value={form.isPublished} onChange={change} className="field"><option value="true">Publish on website</option><option value="false">Save as draft</option></select></Field>
          <div className="flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:justify-end"><button type="button" onClick={close} disabled={saving} className="rounded-xl border px-5 py-3 font-semibold">Cancel</button><button type="submit" disabled={saving} className="rounded-xl bg-[#7b1d1d] px-6 py-3 font-bold text-white disabled:opacity-60">{saving ? "Saving…" : editing ? "Save changes" : form.isPublished === "true" ? "Publish event" : "Create draft"}</button></div>
        </form></div></div>}
    </div>
  );
}

function Field({ label, children }) {
  return <label className="block"><span className="mb-2 block text-sm font-bold text-gray-700">{label}</span>{children}</label>;
}
