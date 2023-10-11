export function nearestInterpolation(imgData, pw, ph, fw, fh) {
    let m = Math.min(fw / pw, fh / ph);
    let res = new ImageData(fw, fh).data;
    for (let i = 0; i < fw; i++) {
        for (let j = 0; j < fh; j++) {
            let cor = (Math.floor(i/m) + Math.floor(j/m) * pw) * 4;
            if (i < (fw - m * pw) / 2) {
                cor = 4 * (Math.floor(j/m) * pw);
            }
            else if (i > (fw + m * pw) / 2) {
                cor = 4 * (Math.floor(j/m + 1) * pw - 1);
            }
            else if (j < (fh - m * ph) / 2) {
                cor = 4 * Math.floor(i/m);
            }
            else if (j > (fh + m * ph) / 2) {
                cor = 4 * (pw * (ph - 1) + Math.floor(i/m));
            }
            res[(j * fw + i) * 4] = imgData[cor];
            res[(j * fw + i) * 4 + 1] = imgData[cor + 1];
            res[(j * fw + i) * 4 + 2] = imgData[cor + 2];
            res[(j * fw + i) * 4 + 3] = imgData[cor + 3];
        }
    }
    return res;
}