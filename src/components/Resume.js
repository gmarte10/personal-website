import resume from '../assets/giancarlos_marte_resume.pdf';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume = () => {
  return (
    <>
      <div>
        <Document>
            file={resume}
            onLoadError={console.error}
            style={{ width: "100%", height: "100vh" }}
            <Page pageIndex={0}/>
        </Document>
        {/* <object
          class="pdf"
          data="https://drive.google.com/file/d/1W0i9gGgjhHjKoAI4EIZT9EMgEh0ccnAZ/view?usp=sharing"
          width="800"
          height="500"
        ></object> */}
      </div>
    </>
  );
};
