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

    const hiddenCanvas = document.createElement('canvas');
    const hiddenCtx = hiddenCanvas.getContext('2d');

    const img = new Image();
    img.src = 'certt.jpg';

    img.onload = function () {
        canvas.width = hiddenCanvas.width = 3501;
        canvas.height = hiddenCanvas.height = 2470;

        
        hiddenCtx.drawImage(img, 0, 0, 3501, 2470);

       
        hiddenCtx.font = "600 60px Arial";
        hiddenCtx.fillStyle = "hsl(240, 1.10%, 17.50%)";

        hiddenCtx.fillText(document.getElementById('messrs').value, 750, 975);
        hiddenCtx.fillText(document.getElementById('of').value, 600, 1110);
        hiddenCtx.fillText(document.getElementById('type').value, 950, 1305);
        hiddenCtx.fillText(document.getElementById('contractRef').value, 1000, 1425);
        hiddenCtx.fillText(document.getElementById('totalValue').value, 2605, 1425);
        hiddenCtx.fillText(document.getElementById('dateAward').value, 1250, 1547);
        hiddenCtx.fillText(document.getElementById('duration').value, 2630, 1547);
        hiddenCtx.fillText(document.getElementById('issuedDate').value, 1250, 1880);
        hiddenCtx.fillText(document.getElementById('dayOf').value, 2000, 1880);
        hiddenCtx.fillText(document.getElementById('inYear').value, 2900, 1880);

        hiddenCtx.font = "italic 100px Caveat, cursive";
hiddenCtx.fillStyle = "#0033A0";  
hiddenCtx.textBaseline = "top";   
hiddenCtx.fillText(document.getElementById('signDate').value, 2750, 1950);


       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (isBlurred) {
            ctx.filter = `blur(${blurAmount}px)`;
        } else {
            ctx.filter = 'none';
        }

        
        ctx.drawImage(hiddenCanvas, 0, 0);
        ctx.filter = 'none'; 
    };
}

function toggleBlur() {
    isBlurred = document.getElementById('blurToggle').checked;
    updateBlurAmount();
}

function updateBlurAmount() {
    blurAmount = parseFloat(document.getElementById('blurAmount').value) || 5;
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
