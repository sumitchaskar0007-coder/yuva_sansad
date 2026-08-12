import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  FaArrowLeft,
  FaCloudUploadAlt,
  FaEdit,
  FaExternalLinkAlt,
  FaImages,
  FaLink,
  FaPlus,
  FaTimes,
  FaTrash,
  FaVideo,
} from "react-icons/fa";
import { galleryAPI } from "../../api";
import { getMediaType, getMediaUrl, getVideoEmbedUrl } from "../../utils/media";

const EMPTY_FORM = {
  title: "",
  description: "",
  category: "",
  mediaType: "image",
  sourceType: "upload",
  mediaUrl: "",
};

const GalleryAdmin = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("image");
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [mediaFile, setMediaFile] = useState(null);
  const [filePreview, setFilePreview] = useState("");

  const fetchItems = async () => {
    try {
      const response = await galleryAPI.getAll();
      setItems(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load gallery items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchItems(); }, []);
  useEffect(() => () => { if (filePreview) URL.revokeObjectURL(filePreview); }, [filePreview]);

  const visibleItems = useMemo(
    () => items.filter((item) => getMediaType(item) === activeTab),
    [items, activeTab]
  );

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setForm(EMPTY_FORM);
    setMediaFile(null);
    setFilePreview("");
  };

  const openCreate = () => {
    setEditingItem(null);
    setForm({ ...EMPTY_FORM, mediaType: activeTab });
    setMediaFile(null);
    setFilePreview("");
    setShowModal(true);
  };

  const openEdit = (item) => {
    const mediaType = getMediaType(item);
    setEditingItem(item);
    setForm({
      title: item.title || "",
      description: item.description || "",
      category: item.category || "",
      mediaType,
      sourceType: item.sourceType || (item.cloudinaryId ? "upload" : "url"),
      mediaUrl: item.sourceType === "url" || !item.cloudinaryId ? getMediaUrl(item) : "",
    });
    setMediaFile(null);
    setFilePreview("");
    setShowModal(true);
  };

  const changeForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (name === "mediaType" || name === "sourceType") {
      setMediaFile(null);
      setFilePreview("");
    }
  };

  const handleFile = (event) => {
    const file = event.target.files?.[0] || null;
    if (!file) return;
    const maxSize = (form.mediaType === "image" ? 10 : 100) * 1024 * 1024;
    if (!file.type.startsWith(`${form.mediaType}/`)) {
      toast.error(`Please choose a valid ${form.mediaType} file`);
      event.target.value = "";
      return;
    }
    if (file.size > maxSize) {
      toast.error(`File must be smaller than ${form.mediaType === "image" ? 10 : 100} MB`);
      event.target.value = "";
      return;
    }
    setMediaFile(file);
    setFilePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const sourceChanged = editingItem && form.sourceType !== (editingItem.sourceType || (editingItem.cloudinaryId ? "upload" : "url"));
    const typeChanged = editingItem && form.mediaType !== getMediaType(editingItem);
    if (form.sourceType === "upload" && !mediaFile && (!editingItem || sourceChanged || typeChanged)) {
      return toast.error(`Select a ${form.mediaType} file to upload`);
    }
    if (form.sourceType === "url" && !form.mediaUrl.trim()) {
      return toast.error("Enter a media URL");
    }

    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => payload.append(key, value));
    if (mediaFile) payload.append("media", mediaFile);

    setSaving(true);
    try {
      if (editingItem) {
        await galleryAPI.update(editingItem._id, payload);
        toast.success(`${form.mediaType === "image" ? "Photo" : "Video"} updated`);
      } else {
        await galleryAPI.create(payload);
        toast.success(`${form.mediaType === "image" ? "Photo" : "Video"} added to gallery`);
      }
      setActiveTab(form.mediaType);
      closeModal();
      await fetchItems();
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to save gallery item");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`Delete “${item.title}”? This cannot be undone.`)) return;
    try {
      await galleryAPI.delete(item._id);
      setItems((current) => current.filter((value) => value._id !== item._id));
      toast.success("Gallery item deleted");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete gallery item");
    }
  };

  const renderMedia = (item, className = "h-full w-full object-cover") => {
    const url = getMediaUrl(item);
    if (getMediaType(item) === "image") return <img src={url} alt={item.title} className={className} />;
    const embed = getVideoEmbedUrl(url);
    return embed
      ? <iframe src={embed} title={item.title} className="h-full w-full" loading="lazy" allowFullScreen />
      : <video src={url} controls preload="metadata" className={className} />;
  };

  const previewUrl = filePreview || (form.sourceType === "url" ? form.mediaUrl : editingItem ? getMediaUrl(editingItem) : "");

  return (
    <div className="min-h-screen bg-[#f5f3f1] pb-16 pt-10">
      <header className="border-y border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <Link to="/admin/dashboard" className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#7b1d1d]"><FaArrowLeft /> Back to dashboard</Link>
            <h1 className="text-2xl font-bold text-[#0a2a66]">Gallery Management</h1>
            <p className="mt-1 text-sm text-gray-500">Publish and manage website photos and videos.</p>
          </div>
          <button type="button" onClick={openCreate} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7b1d1d] px-5 py-3 font-bold text-white shadow-md transition hover:bg-[#651717]"><FaPlus /> Add media</button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-7 grid gap-4 sm:grid-cols-2">
          {[
            { type: "image", label: "Photos", icon: FaImages },
            { type: "video", label: "Videos", icon: FaVideo },
          ].map(({ type, label, icon: Icon }) => {
            const count = items.filter((item) => getMediaType(item) === type).length;
            return (
              <button key={type} type="button" onClick={() => setActiveTab(type)} className={`flex items-center justify-between rounded-2xl border p-5 text-left transition ${activeTab === type ? "border-[#7b1d1d] bg-[#7b1d1d] text-white shadow-lg" : "border-gray-200 bg-white text-gray-700 hover:border-red-200"}`}>
                <span className="flex items-center gap-3"><span className={`rounded-xl p-3 ${activeTab === type ? "bg-white/15" : "bg-red-50 text-[#7b1d1d]"}`}><Icon /></span><span><span className="block font-bold">{label}</span><span className={`text-xs ${activeTab === type ? "text-red-100" : "text-gray-500"}`}>Manage gallery {label.toLowerCase()}</span></span></span>
                <span className="text-2xl font-bold">{count}</span>
              </button>
            );
          })}
        </div>

        {loading ? (
          <div className="flex min-h-64 items-center justify-center"><div className="h-10 w-10 animate-spin rounded-full border-4 border-red-100 border-t-[#7b1d1d]" /></div>
        ) : visibleItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            {activeTab === "image" ? <FaImages className="mx-auto text-4xl text-gray-300" /> : <FaVideo className="mx-auto text-4xl text-gray-300" />}
            <h2 className="mt-4 text-lg font-bold text-gray-800">No {activeTab === "image" ? "photos" : "videos"} added</h2>
            <button type="button" onClick={openCreate} className="mt-5 rounded-lg bg-[#7b1d1d] px-4 py-2 text-sm font-bold text-white">Add the first one</button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <article key={item._id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="aspect-video bg-gray-950">{renderMedia(item)}</div>
                <div className="p-5">
                  <div className="mb-2 flex items-start justify-between gap-3"><h2 className="font-bold text-[#0a2a66]">{item.title}</h2><span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase text-gray-600">{item.sourceType || (item.cloudinaryId ? "upload" : "url")}</span></div>
                  {item.description && <p className="mb-3 line-clamp-2 text-sm leading-5 text-gray-500">{item.description}</p>}
                  {item.category && <span className="inline-block rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-[#7b1d1d]">{item.category}</span>}
                  <div className="mt-5 flex gap-2 border-t border-gray-100 pt-4">
                    <button type="button" onClick={() => openEdit(item)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0a2a66] px-3 py-2 text-sm font-semibold text-white hover:bg-blue-950"><FaEdit /> Edit</button>
                    <button type="button" onClick={() => handleDelete(item)} className="inline-flex items-center justify-center rounded-lg border border-red-200 px-3 py-2 text-red-700 hover:bg-red-50" aria-label={`Delete ${item.title}`}><FaTrash /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {showModal && (
        <div className="fixed inset-0 z-[80] overflow-y-auto bg-gray-950/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="mx-auto my-6 max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <div><h2 className="text-xl font-bold text-[#0a2a66]">{editingItem ? "Edit gallery media" : "Add gallery media"}</h2><p className="text-sm text-gray-500">Fields marked * are required.</p></div>
              <button type="button" onClick={closeModal} className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700" aria-label="Close"><FaTimes /></button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">Media type *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[{ value: "image", label: "Photo", icon: FaImages }, { value: "video", label: "Video", icon: FaVideo }].map(({ value, label, icon: Icon }) => (
                        <label key={value} className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-3 font-semibold ${form.mediaType === value ? "border-[#7b1d1d] bg-red-50 text-[#7b1d1d]" : "border-gray-200 text-gray-600"}`}><input type="radio" name="mediaType" value={value} checked={form.mediaType === value} onChange={changeForm} className="sr-only" /><Icon /> {label}</label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">Media source *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[{ value: "upload", label: "Upload", icon: FaCloudUploadAlt }, { value: "url", label: "Use URL", icon: FaLink }].map(({ value, label, icon: Icon }) => (
                        <label key={value} className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-3 font-semibold ${form.sourceType === value ? "border-[#0a2a66] bg-blue-50 text-[#0a2a66]" : "border-gray-200 text-gray-600"}`}><input type="radio" name="sourceType" value={value} checked={form.sourceType === value} onChange={changeForm} className="sr-only" /><Icon /> {label}</label>
                      ))}
                    </div>
                  </div>

                  {form.sourceType === "upload" ? (
                    <div>
                      <label htmlFor="gallery-file" className="mb-2 block text-sm font-bold text-gray-700">{editingItem ? `Replace ${form.mediaType} (optional)` : `Choose ${form.mediaType} *`}</label>
                      <label htmlFor="gallery-file" className="flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-7 text-center hover:border-[#7b1d1d] hover:bg-red-50"><FaCloudUploadAlt className="mb-2 text-3xl text-[#7b1d1d]" /><span className="text-sm font-semibold text-gray-700">{mediaFile ? mediaFile.name : "Browse your device"}</span><span className="mt-1 text-xs text-gray-500">{form.mediaType === "image" ? "JPG, PNG, WebP or GIF · Max 10 MB" : "MP4, WebM, MOV or M4V · Max 100 MB"}</span></label>
                      <input id="gallery-file" type="file" accept={form.mediaType === "image" ? "image/jpeg,image/png,image/webp,image/gif" : "video/mp4,video/webm,video/quicktime,video/x-m4v"} onChange={handleFile} className="sr-only" />
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="mediaUrl" className="mb-2 block text-sm font-bold text-gray-700">Media URL *</label>
                      <div className="relative"><FaLink className="absolute left-3 top-3.5 text-gray-400" /><input id="mediaUrl" name="mediaUrl" type="url" value={form.mediaUrl} onChange={changeForm} placeholder={form.mediaType === "video" ? "YouTube, Vimeo, or direct video URL" : "https://example.com/photo.jpg"} className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-3 outline-none focus:border-[#0a2a66] focus:ring-2 focus:ring-blue-100" required /></div>
                    </div>
                  )}
                </div>

                <div className="space-y-5">
                  <div><label htmlFor="title" className="mb-2 block text-sm font-bold text-gray-700">Title *</label><input id="title" name="title" value={form.title} onChange={changeForm} maxLength={120} className="w-full rounded-xl border border-gray-300 px-3 py-3 outline-none focus:border-[#0a2a66] focus:ring-2 focus:ring-blue-100" required /></div>
                  <div><label htmlFor="category" className="mb-2 block text-sm font-bold text-gray-700">Category</label><input id="category" name="category" value={form.category} onChange={changeForm} maxLength={80} placeholder="e.g. Annual Session" className="w-full rounded-xl border border-gray-300 px-3 py-3 outline-none focus:border-[#0a2a66] focus:ring-2 focus:ring-blue-100" /></div>
                  <div><label htmlFor="description" className="mb-2 block text-sm font-bold text-gray-700">Description</label><textarea id="description" name="description" value={form.description} onChange={changeForm} maxLength={1000} rows={4} className="w-full resize-none rounded-xl border border-gray-300 px-3 py-3 outline-none focus:border-[#0a2a66] focus:ring-2 focus:ring-blue-100" /><div className="mt-1 text-right text-xs text-gray-400">{form.description.length}/1000</div></div>
                </div>
              </div>

              {previewUrl && (
                <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4"><div className="mb-2 flex items-center justify-between"><span className="text-sm font-bold text-gray-700">Preview</span>{form.sourceType === "url" && <a href={previewUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-[#0a2a66]">Open source <FaExternalLinkAlt /></a>}</div><div className="mx-auto aspect-video max-w-md overflow-hidden rounded-lg bg-gray-950">{renderMedia({ title: form.title || "Media preview", mediaType: form.mediaType, mediaUrl: previewUrl })}</div></div>
              )}

              <div className="mt-7 flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
                <button type="button" onClick={closeModal} disabled={saving} className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50">Cancel</button>
                <button type="submit" disabled={saving} className="rounded-xl bg-[#7b1d1d] px-6 py-3 font-bold text-white shadow-sm hover:bg-[#651717] disabled:cursor-not-allowed disabled:opacity-60">{saving ? "Saving…" : editingItem ? "Save changes" : "Publish media"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryAdmin;
