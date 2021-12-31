

let P
let r
let t
let n
let A
let IE
let totalAmountEl = document.getElementById("total-amount-display")
let interestEarnedEl = document.getElementById("interest-earned-display")

function calculate() {
    P = document.getElementById("principal").value
    P = P.replace(/,/g, '')
    P = parseFloat(P)
    r = parseFloat(document.getElementById("rate").value)
    t = parseFloat(document.getElementById("time").value)
    n = document.getElementById("compound").value
    r = r / 100
    console.log( P, r, t, n)
    if (n === "continuously") {
        A = r * t
        A = Math.exp(A)
        A = P * A
        A = A.toFixed(2)
        totalAmountEl.textContent = A
        A = parseFloat(A)
        IE = A - P 
        IE = IE.toFixed(2)
        interestEarnedEl.textContent = IE
    } else { 
        if (n === "annually") {
            n = 1
        } else if (n === "quarterly") {
            n = 4
        } else if (n === "monthly") {
            n = 12
        }
        A = r / n
        A = A + 1
        A = Math.pow(A, n * t)
        A = P * A
        A = A.toFixed(2)
        totalAmountEl.textContent = A
        A = parseFloat(A)
        IE = A - P 
        IE = IE.toFixed(2)
        interestEarnedEl.textContent = IE
    }
  }


    



