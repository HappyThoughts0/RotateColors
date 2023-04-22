const btn = document.querySelector(".btn");
// const colorBlock = document.querySelector(".colorBlock");
const colorBlocks = Array.from(document.querySelectorAll(".colorBlock"));

cnt = 0;

// colorBlock.innerHTML = "Blue";

// btn.addEventListener("click", () => {
//   cnt++;
//   colorBlock.innerHTML = "Red";
//   //   colorBlock.textContent = "Red";
//   //   colorBlock.classList.remove("blue");
//   colorBlock.classList.add("red");

//   else if (cnt > 1) {
//     cnt = 0;
//     colorBlock.innerHTML = "Blue";
//     colorBlock.classList.remove("red");
//     colorBlock.classList.add("blue");
//   }
// });
let colorBox;

colorBlocks.forEach((blk, i) => {});
//   console.log(blk.id);
//   blk.id === "block" + `${i}`;
let colorBox1 = document.getElementById("block1");
let colorBox2 = document.getElementById("block2");
let colorBox3 = document.getElementById("block3");

// console.log(blk);
// btn.addEventListener("click", () => {});
//   console.log(colorBox);

setInterval(changeColor, 500);

function changeColor() {
  if (
    colorBox1.classList.contains("blue") &&
    colorBox2.classList.contains("red") &&
    colorBox3.classList.contains("yellow")
  ) {
    colorBox1.classList.remove("blue");
    colorBox1.classList.add("yellow");
    colorBox2.classList.remove("red");
    colorBox2.classList.add("blue");
    colorBox3.classList.remove("yellow");
    colorBox3.classList.add("red");
  } else if (
    colorBox1.classList.contains("yellow") &&
    colorBox2.classList.contains("blue") &&
    colorBox3.classList.contains("red")
  ) {
    colorBox1.classList.remove("yellow");
    colorBox1.classList.add("red");
    colorBox2.classList.remove("blue");
    colorBox2.classList.add("yellow");
    colorBox3.classList.remove("red");
    colorBox3.classList.add("blue");
  } else if (
    colorBox1.classList.contains("red") &&
    colorBox2.classList.contains("yellow") &&
    colorBox3.classList.contains("blue")
  ) {
    colorBox1.classList.remove("red");
    colorBox1.classList.add("blue");
    colorBox2.classList.remove("yellow");
    colorBox2.classList.add("red");
    colorBox3.classList.remove("blue");
    colorBox3.classList.add("yellow");
  }
}

//-----------------------------------
//   if (
//     colorBox1.classList.contains("blue") &&
//     colorBox2.classList.contains("red") &&
//     colorBox3.classList.contains("yellow")
//   ) {
//     colorBox1.classList.remove("blue");
//     colorBox1.classList.add("yellow");
//     colorBox2.classList.remove("red");
//     colorBox2.classList.add("blue");
//     colorBox3.classList.remove("yellow");
//     colorBox3.classList.add("red");
//   } else if (
//     colorBox1.classList.contains("yellow") &&
//     colorBox2.classList.contains("blue") &&
//     colorBox3.classList.contains("red")
//   ) {
//     colorBox1.classList.remove("yellow");
//     colorBox1.classList.add("red");
//     colorBox2.classList.remove("blue");
//     colorBox2.classList.add("yellow");
//     colorBox3.classList.remove("red");
//     colorBox3.classList.add("blue");
//   } else if (
//     colorBox1.classList.contains("red") &&
//     colorBox2.classList.contains("yellow") &&
//     colorBox3.classList.contains("blue")
//   ) {
//     colorBox1.classList.remove("red");
//     colorBox1.classList.add("blue");
//     colorBox2.classList.remove("yellow");
//     colorBox2.classList.add("red");
//     colorBox3.classList.remove("blue");
//     colorBox3.classList.add("yellow");
//   }
// else if (colorBox.classList.contains("blue") {
//     colorBox.classList.remove("blue");
//     colorBox.classList.add("yellow")  };
//     else if (colorBox.classList.contains("blue") {
//         colorBox.classList.remove("blue");
//         colorBox.classList.add("yellow")  };
//   }
//   else if (colorBox.style.backgroundColor === "blue") {
//   }
//   else if (colorBox.style.backgroundColor === "blue") {
//   }

// setInterval(() => {}, 200);
