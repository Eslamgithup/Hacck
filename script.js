// إظهار نافذة إدخال رقم الهاتف
function showPhoneNumberPopup() {
    document.getElementById("phone-popup").style.display = "flex";
}

// عرض بيانات الحساب بعد إدخال رقم الهاتف
function submitPhoneNumber() {
    const phoneNumber = document.getElementById("mobile-number").value;
    if (phoneNumber.trim() === "") {
        alert("يرجى إدخال رقم الموبايل.");
    } else {
        document.getElementById("phone-popup").style.display = "none";
        document.getElementById("account-info").style.display = "block";
        document.getElementById("user-phone").textContent = phoneNumber;
    }
}