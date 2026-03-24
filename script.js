function enkripsi() {
    let teks = document.getElementById("teks").value.toUpperCase();
    let k = parseInt(document.getElementById("key").value);

    if (isNaN(k)) {
        alert("Masukkan angka untuk shift!");
        return;
    }

    let hasil = "";

    for (let i = 0; i < teks.length; i++) {
        let char = teks[i];

        if (char >= 'A' && char <= 'Z') {
            let x = char.charCodeAt(0) - 65;   // A=0
            let enc = (x + k) % 26;           // Z_26
            hasil += String.fromCharCode(enc + 65);
        } else {
            hasil += char; // spasi/simbol tetap
        }
    }

    document.getElementById("hasil").innerText = hasil;
}

function dekripsi() {
    let teks = document.getElementById("teks").value.toUpperCase();
    let k = parseInt(document.getElementById("key").value);

    if (isNaN(k)) {
        alert("Masukkan angka untuk shift!");
        return;
    }

    let hasil = "";

    for (let i = 0; i < teks.length; i++) {
        let char = teks[i];

        if (char >= 'A' && char <= 'Z') {
            let x = char.charCodeAt(0) - 65;
            let dec = (x - k + 26) % 26;   // penting +26 biar tidak negatif
            hasil += String.fromCharCode(dec + 65);
        } else {
            hasil += char;
        }
    }

    document.getElementById("hasil").innerText = hasil;
}
