import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaArrowLeft, FaCloudUploadAlt, FaEdit, FaEye, FaNewspaper, FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import { newsAPI } from "../../api";

const EMPTY_FORM = { title: "", author: "", description: "", isPublished: "true" };

export default function NewsAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  const loadNews = async () => {
    try {
      const { data } = await newsAPI.getAllAdmin();
      setItems(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadNews(); }, []);
  useEffect(() => () => { if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview); }, [preview]);

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setForm(EMPTY_FORM);
    setImageFile(null);
    setPreview("");
  };

  const openCreate = () => {
    setEditingItem(null);
    setForm(EMPTY_FORM);
    setImageFile(null);
    setPreview("");
    setShowModal(true);
  };

  const openEdit = (item) => {
    setEditingItem(item);
    setForm({ title: item.title, author: item.author || "Jadhavar Yuva Sansad", description: item.description, isPublished: String(item.isPublished) });
    setImageFile(null);
    setPreview(item.imageUrl);
    setShowModal(true);
  };

  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) {
      toast.error("Use a JPG, PNG, WebP, or GIF image");
      event.target.value = "";
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image must be smaller than 10 MB");
      event.target.value = "";
      return;
    }
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!editingItem && !imageFile) return toast.error("Select a news image");
    const payload = new FormData();
    payload.append("title", form.title);
    payload.append("author", form.author);
    payload.append("description", form.description);
    payload.append("isPublished", form.isPublished);
    if (imageFile) payload.append("image", imageFile);

    setSaving(true);
    try {
      if (editingItem) {
        await newsAPI.update(editingItem._id, payload);
        toast.success("News article updated");
      } else {
        await newsAPI.create(payload);
        toast.success(form.isPublished === "true" ? "News published" : "News saved as draft");
      }
      closeModal();
      await loadNews();
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to save news");
    } finally {
      setSaving(false);
    }
  };

  const togglePublished = async (item) => {
    try {
      const { data } = await newsAPI.setPublished(item._id, !item.isPublished);
      setItems((current) => current.map((value) => value._id === item._id ? data : value));
      toast.success(data.isPublished ? "News published" : "News moved to drafts");
    } catch (error) {
      toast.error(error.response?.data?.message || "Status could not be changed");
    }
  };

  const remove = async (item) => {
    if (!window.confirm(`Delete “${item.title}”? This will also remove its image.`)) return;
    try {
      await newsAPI.delete(item._id);
      setItems((current) => current.filter((value) => value._id !== item._id));
      toast.success("News article deleted");
    } catch (error) {
      toast.error(error.response?.data?.message || "News could not be deleted");
    }
  };

  const date = (value) => value ? new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(new Date(value)) : "—";

  return (
    <div className="min-h-screen bg-[#f5f3f1] pb-16 pt-10">
      <header className="border-y border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div><Link to="/admin/dashboard" className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#7b1d1d]"><FaArrowLeft /> Back to dashboard</Link><h1 className="text-2xl font-bold text-[#0a2a66]">News Management</h1><p className="mt-1 text-sm text-gray-500">Create, publish, edit, and remove website news.</p></div>
          <button type="button" onClick={openCreate} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7b1d1d] px-5 py-3 font-bold text-white shadow-md hover:bg-[#651717]"><FaPlus /> Add news</button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap gap-3">
          <span className="rounded-xl bg-white px-4 py-3 text-sm font-semibold shadow-sm">Total <strong className="ml-2 text-[#0a2a66]">{items.length}</strong></span>
          <span className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">Published <strong className="ml-2">{items.filter((item) => item.isPublished).length}</strong></span>
          <span className="rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">Drafts <strong className="ml-2">{items.filter((item) => !item.isPublished).length}</strong></span>
        </div>

        {loading ? <div className="flex min-h-64 items-center justify-center"><div className="h-10 w-10 animate-spin rounded-full border-4 border-red-100 border-t-[#7b1d1d]" /></div> : items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-16 text-center"><FaNewspaper className="mx-auto text-4xl text-gray-300" /><h2 className="mt-4 text-xl font-bold">No news articles yet</h2><button onClick={openCreate} className="mt-5 rounded-lg bg-[#7b1d1d] px-4 py-2 font-bold text-white">Publish your first news</button></div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="divide-y divide-gray-100">
              {items.map((item) => (
                <article key={item._id} className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center">
                  <img src={item.imageUrl} alt={item.title} className="h-32 w-full rounded-xl object-cover sm:h-24 sm:w-36" />
                  <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${item.isPublished ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}>{item.isPublished ? "Published" : "Draft"}</span><span className="text-xs text-gray-400">{date(item.publishedAt || item.createdAt)} · {item.author || "Jadhavar Yuva Sansad"}</span></div><h2 className="mt-2 truncate text-lg font-bold text-[#0a2a66]">{item.title}</h2><p className="mt-1 line-clamp-1 text-sm text-gray-500">{item.description}</p></div>
                  <div className="flex flex-wrap gap-2">
                    {item.isPublished && <Link to={`/news/${item._id}`} target="_blank" className="rounded-lg border border-gray-200 p-2.5 text-gray-600 hover:bg-gray-50" aria-label="View news"><FaEye /></Link>}
                    <button onClick={() => openEdit(item)} className="rounded-lg bg-[#0a2a66] p-2.5 text-white hover:bg-blue-950" aria-label="Edit news"><FaEdit /></button>
                    <button onClick={() => togglePublished(item)} className={`rounded-lg px-3 py-2 text-xs font-bold ${item.isPublished ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"}`}>{item.isPublished ? "Unpublish" : "Publish"}</button>
                    <button onClick={() => remove(item)} className="rounded-lg border border-red-200 p-2.5 text-red-700 hover:bg-red-50" aria-label="Delete news"><FaTrash /></button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </main>

      {showModal && (
        <div className="fixed inset-0 z-[80] overflow-y-auto bg-gray-950/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="mx-auto my-6 max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5"><div><h2 className="text-xl font-bold text-[#0a2a66]">{editingItem ? "Edit news" : "Create news"}</h2><p className="text-sm text-gray-500">Add a photo, title, author, and full description.</p></div><button type="button" onClick={closeModal} className="rounded-full p-2 text-gray-400 hover:bg-gray-100" aria-label="Close"><FaTimes /></button></div>
            <form onSubmit={submit} className="space-y-5 p-6">
              <div><label htmlFor="news-title" className="mb-2 block text-sm font-bold text-gray-700">Title *</label><input id="news-title" value={form.title} onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))} maxLength={180} className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0a2a66] focus:ring-2 focus:ring-blue-100" required /></div>
              <div><label htmlFor="news-author" className="mb-2 block text-sm font-bold text-gray-700">Author *</label><input id="news-author" value={form.author} onChange={(event) => setForm((current) => ({ ...current, author: event.target.value }))} maxLength={100} placeholder="Name of the person or organization" className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0a2a66] focus:ring-2 focus:ring-blue-100" required /></div>
              <div><label htmlFor="news-description" className="mb-2 block text-sm font-bold text-gray-700">Description *</label><textarea id="news-description" value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} maxLength={10000} rows={7} className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0a2a66] focus:ring-2 focus:ring-blue-100" required /><p className="mt-1 text-right text-xs text-gray-400">{form.description.length}/10000</p></div>
              <div><label className="mb-2 block text-sm font-bold text-gray-700">News photo {editingItem ? "(optional replacement)" : "*"}</label><label htmlFor="news-image" className="flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center hover:border-[#7b1d1d] hover:bg-red-50"><FaCloudUploadAlt className="mb-2 text-3xl text-[#7b1d1d]" /><span className="text-sm font-semibold">{imageFile ? imageFile.name : editingItem ? "Choose a new image to replace the current one" : "Choose an image"}</span><span className="mt-1 text-xs text-gray-500">JPG, PNG, WebP, or GIF · Max 10 MB</span></label><input id="news-image" type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={handleFile} className="sr-only" />{preview && <img src={preview} alt="News preview" className="mt-4 max-h-64 w-full rounded-xl object-cover" />}</div>
              <div><label htmlFor="news-status" className="mb-2 block text-sm font-bold text-gray-700">Status</label><select id="news-status" value={form.isPublished} onChange={(event) => setForm((current) => ({ ...current, isPublished: event.target.value }))} className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0a2a66]"><option value="true">Publish on website</option><option value="false">Save as draft</option></select></div>
              <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end"><button type="button" onClick={closeModal} disabled={saving} className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700">Cancel</button><button type="submit" disabled={saving} className="rounded-xl bg-[#7b1d1d] px-6 py-3 font-bold text-white hover:bg-[#651717] disabled:opacity-60">{saving ? "Saving…" : form.isPublished === "true" ? editingItem ? "Update & publish" : "Publish news" : editingItem ? "Save draft" : "Create draft"}</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
