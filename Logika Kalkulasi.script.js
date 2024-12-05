function calculate() {
    const vc = parseFloat(document.getElementById("vc").value); // Kecepatan potong
    const d = parseFloat(document.getElementById("d").value);   // Diameter benda kerja

    if (isNaN(vc) || isNaN(d) || vc <= 0 || d <= 0) {
        alert("Masukkan nilai yang valid!");
        return;
    }

    // Rumus: n = (1000 x Vc) / (π x D)
    const n = (1000 * vc) / (Math.PI * d);
    document.getElementById("spindle-speed").innerText = `Putaran Spindel (n): ${n.toFixed(2)} rpm`;
}
