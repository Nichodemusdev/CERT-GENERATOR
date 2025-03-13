let blurAmount = 5;
        let isBlurred = false;
    
        function showCertificate() {
            document.getElementById('certificateForm').style.display = 'none';
            document.getElementById('certificateCanvas').style.display = 'block';
            document.getElementById('certificateControls').style.display = 'block';
            generateCertificate();
        }
    
        function generateCertificate() {
            const canvas = document.getElementById('certificateCanvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = 'cert.jpg';
            
            img.onload = function () {
                canvas.width = 3501;
                canvas.height = 2470;
    
               
                if (isBlurred) {
                    ctx.filter = `blur(${blurAmount}px)`;
                } else {
                    ctx.filter = 'none';
                }
    
                ctx.drawImage(img, 0, 0, 3501, 2470);
    
               
                if (isBlurred) {
                    ctx.filter = `blur(${blurAmount}px)`;
                }
    
                ctx.font = "600 60px Arial";
                 ctx.fillStyle = "black";




    
                ctx.fillText(document.getElementById('messrs').value, 750, 925);
                ctx.fillText(document.getElementById('of').value, 600, 1060);
                ctx.fillText(document.getElementById('type').value, 930, 1257);
                ctx.fillText(document.getElementById('contractRef').value, 1000, 1380);
                ctx.fillText(document.getElementById('totalValue').value, 2600, 1380);
                ctx.fillText(document.getElementById('dateAward').value, 1250, 1500);
                ctx.fillText(document.getElementById('duration').value, 2630, 1500);
                ctx.fillText(document.getElementById('issuedDate').value, 1250, 1835);
                ctx.fillText(document.getElementById('dayOf').value, 2000, 1835);
                ctx.fillText(document.getElementById('inYear').value, 2900, 1835);
    
                ctx.font = "italic 100px 'Caveat', cursive";
                ctx.fillStyle = "#0033A0";
                ctx.fillText(document.getElementById('signDate').value, 2750, 2000);
    
               
                ctx.filter = 'none';
            };
        }
    
        function toggleBlur() {
            isBlurred = document.getElementById('blurToggle').checked;
            updateBlurAmount();
        }
    
        function updateBlurAmount() {
            blurAmount = document.getElementById('blurAmount').value;
            generateCertificate(); 
        }
    
        function downloadImage() {
            const canvas = document.getElementById('certificateCanvas');
            const link = document.createElement('a');
            link.href = canvas.toDataURL("image/png");
            link.download = "certificate.png";
            link.click();
        }
    
        function downloadPDF() {
    const canvas = document.getElementById('certificateCanvas');
    const imgData = canvas.toDataURL("image/png");

   
    const pdf = new jsPDF('l', 'mm', 'a4');

  
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save("certificate.pdf");
}
