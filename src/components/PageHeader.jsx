export default function PageHeader({ title = "", breadcrumb = [], children }) {
  const items = typeof breadcrumb === "string" ? [breadcrumb] : Array.isArray(breadcrumb) ? breadcrumb : [];

  return (
    <div id="pageheader-container" className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white rounded-xl shadow-sm mb-6">
      <div className="flex flex-col">
        <span id="page-title" className="text-2xl font-semibold text-slate-900">{title}</span>
        {items.length > 0 && (
          <div id="breadcrumb-links" className="flex flex-wrap items-center font-medium text-sm text-slate-500 mt-3 gap-1">
            {items.map((crumb, index) => (
              <span key={index} className="inline-flex items-center">
                <span>{crumb}</span>
                {index < items.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </div>
        )}
      </div>
      {children && <div id="action-button" className="mt-4 md:mt-0">{children}</div>}
    </div>
  );
}
  