document.addEventListener("DOMContentLoaded", () =>{
    const input = document.querySelector("input[type='number']")
    input.oninput = () => {
        if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    }
})