function isPalindrome(str) {
  const clean = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return clean === [...clean].reverse().join("");
}

document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value;
  const result = document.getElementById("result");

  if (!input) {
    alert("Please input a value");
    return;
  }

  const palindrome = isPalindrome(input);
  result.textContent = input + " is " + (palindrome ? "" : "not ") + "a palindrome.";
});
