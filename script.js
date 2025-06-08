function getTodayDate() {
  const today = new Date();
  return today.toISOString().split("T")[0]; // yyyy-mm-dd
}

function signIn() {
  const name = document.getElementById("nameInput").value.trim();
  const result = document.getElementById("result");

  if (!name) {
    result.textContent = "请输入有效姓名";
    return;
  }

  const today = getTodayDate();
  const signInKey = `signIn_${name}`;
  const previousSignIn = localStorage.getItem(signInKey);

  if (previousSignIn === today) {
    result.textContent = `${name} 今天已经签到过了！`;
  } else {
    localStorage.setItem(signInKey, today);
    result.textContent = `签到成功！欢迎你，${name}！`;
  }
}
