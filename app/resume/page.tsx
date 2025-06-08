export default function Resume() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <object data="/resume.pdf" type="application/pdf" className="w-full h-full">
        <p>
          Your browser does not support PDFs. Please download the PDF to view it:
          <a href="/resume.pdf">Download PDF</a>
        </p>
      </object>
    </div>
  )
}
