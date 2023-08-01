import React, { useState, useEffect } from 'react';
import originalTemplate from "../assets/word-documents/test.docx";
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
var ImageModule = require('open-docxtemplater-image-module');
const fs = require("fs");
const sizeOf = require("image-size");

//Thrid time's the charm

function base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; ++i) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

const MyComponent = () => {
    const [template, setTemplate] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        fetchTemplate();
    }, []);

    async function fetchTemplate() {
        try {
            const response = await fetch(originalTemplate);
            const templateContent = await response.arrayBuffer();
            const zip = new PizZip(templateContent);
            setTemplate(zip);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function handleFileChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = async () => {
            try {
                const newTemplateContent = reader.result;
                const zip = new PizZip(newTemplateContent);
                setTemplate(zip);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (file) {
            reader.readAsArrayBuffer(file);
        }
    }

    async function loadImageData(imagePath) {
        const response = await fetch(imagePath);
        const imageContent = await response.arrayBuffer();
        return imageContent;
    }

    async function handleSave() {
        try {
            if (template) {
                const doc = new Docxtemplater().loadZip(template);

                const imageTags = ["coverpage", "letter1", "letter2", "letter3", "letter4", "logodelaempresa", "ubicaciondelaempresa"];

                const loadImagesPromises = imageTags.map(async (tag) => {
                    const imageModule = doc.modules["open-docxtemplater-image-module"];
                    const tagValue = imageModule.getImage(tag);
                    const imageData = await loadImageData(tagValue);
                    doc.setData({ [tag]: imageData });
                });

                await Promise.all(loadImagesPromises);
                setImagesLoaded(true);

                doc.resolveImage = function (tagValue, tagName) {
                    return tagValue;
                };

                doc.setData({
                        coverpage: 'https://github.com/CaptDany/UniTools/raw/main/src/assets/images/readmebanner.png',
                        letter1: 'https://github.com/CaptDany/UniTools/raw/main/src/assets/images/readmebanner.png',
                        letter2: 'https://github.com/CaptDany/UniTools/raw/main/src/assets/images/readmebanner.png',
                        letter3: 'https://github.com/CaptDany/UniTools/raw/main/src/assets/images/readmebanner.png',
                        letter4: 'https://github.com/CaptDany/UniTools/raw/main/src/assets/images/readmebanner.png',
                        logodelaempresa: 'https://github.com/CaptDany/UniTools/raw/main/src/assets/images/readmebanner.png',
                        ubicaciondelaempresa: 'https://github.com/CaptDany/UniTools/raw/main/src/assets/images/readmebanner.png',
                        abstract: 'Este es el abstract',
                        resumenejecutivo: 'Este es el resumenejecutivo',
                        nombredelaempresa: 'Este es el nombredelaempresa',
                        figura1: 'pipipupu figura 1',
                        direcciondelaempresa: 'pipipupu #27134 colonia te chingas',
                        figura2: 'figura 2',
                        girodelaempresa: 'Este es el giro de la empresa',
                        tamadelaempresa: 'Este es el tamadelaempresa',
                        principalesproductos: 'Este es el principalesproductos',
                        principalesclientes: 'Este es el principalesclientes',
                        historiadelaempresa: 'Este es el historiadelaempresa',
                        filosofia: 'Este es el filosofia',
                        presencia: 'Este es el presencia',
                        impacto1: 'Este es el impacto1',
                        impacto2: 'Este es el impacto2',
                        descripciondelasituacion: 'Este es el descripciondelasituacion',
                        resultadosdediagnostico: 'Este es el resultadosdediagnostico',
                        objgeneral: 'Este es el objgeneral',
                        "objespec": [
                            { obj: 'Este es el obj especifico 1' },
                            { obj: 'Este es el obj especifico 2' },
                            { obj: 'Este es el obj especifico 3' },
                        ],
                        descripciondelproblema: 'Esta es la descripcion del problema',
                        justificaciondelproblema: 'Esta es la justificaciondelproblema',
                        estadodelarte: 'Este es el estadodelarte',
                    })

                    await Promise.all(Object.entries(doc.imageModule.imageIdToTag).map(async ([imageId, tag]) => {
                        const image = await loadImageData(tag);
                        doc.setImage(imageId, image);
                    }));

                    doc.render();

                const updatedContent = doc.getZip().generate({ type: 'uint8array' });

                // Save the modified content as a file
                const blob = new Blob([updatedContent], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'edited_template.docx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } catch (error) {
            console.error('Error while rendering the document:', error);
        }
    }

    return (
        <div>
            <div>
                <input type="file" onChange={handleFileChange} />
            </div>
            <div>
                <button onClick={handleSave}>Save Edited Template</button>
            </div>
        </div>
    );
};

export default MyComponent;

/*

//Try #2 (pretty close, imo)

const MyComponent = () => {
    const [text, setText] = useState('');
  
    useEffect(() => {
      Test()
        .then((result) => {
          setText(result);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
  
    async function Test() {
      try {
        const response = await fetch(template); // Assuming you're fetching the template from a URL
        const templateContent = await response.arrayBuffer();
  
        const zip = new PizZip(templateContent);
  
        const doc = new Docxtemplater().loadZip(zip);
        const text = doc.getFullText();
        return text;
      } catch (error) {
        throw error;
      }
    }
  
    return (
      <div>
        <pre>{text}</pre>
      </div>
    );
  };
  
  export default MyComponent;
*/

/*

//Try #1

async function docxHandler(){
    const data = {
        test: [
            { title: 'Negros', subtitle: 'IDFC\ntext here!', paragraph: 'Pipipupu!' },
            { title: 'Alon Bar', subtitle: 'Very important\ntext here!', paragraph: 'Not here tho!' },
        ]
    };

    const handler = new TemplateHandler();
    const doc = await handler.process(templateFile, data);

    fs.writeFileSync('test-output.docx', doc);
}

function generararara(){
    return (
        <button onClick={docxHandler}>Format Email List</button>
    );
}

export default generararara();
*/