function orderWhatsApp() {
    const product = document.getElementById("product").value;
    const phoneNumber = "+6285256280799"; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, saya ingin memesan produk: ${product}`;

    if (product) {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    } else {
        alert("Masukkan nama produk yang ingin dipesan.");
    }
}