const img1= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThi4xc9zfm2GQVUqI8ZxZAIttbZsZyQd-bgg&usqp=CAU";
const img2= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqqLnFeCfYn70QptTL-u0GaaYgLpfrWJTKQ&usqp=CAU";
const img3= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoG4otEq6b9gZAI8vx9FpKwiMjxZj1wlHcCw&usqp=CAU";
const img4= "https://images.squarespace-cdn.com/content/v1/542032d5e4b0968055ce5118/1590821174418-EN1TWKVGTXP9AAVN7NDI/image-asset.jpeg"


let actualImgName = "first";

function changeImg(imgName) {
  const mainImgEl = document.getElementById("main-img");
  
  if(imgName === "first") {
    mainImgEl.src = img1;
  }
  
  if(imgName === "second") {
    mainImgEl.src = img2;
  }
  
  if(imgName === "third") {
    mainImgEl.src = img3;
  }

  if(imgName === "fourth") {
    mainImgEl.src = img4;
  }
  
  actualImgName = imgName;
  changeActiveClass();
}

function next(){
  if (actualImgName === "first") {
    changeImg("second");
  } else if (actualImgName === "second") {
    changeImg("third");
  } else if (actualImgName === "third") {
    changeImg("fourth");
  } else if (actualImgName === "fourth") {
    changeImg("first");
}
}

function prev(){
    if (actualImgName === "first") {
      changeImg("fourth");
    } else if (actualImgName ===  "fourth") {
      changeImg("third");
    } else if (actualImgName === "third") {
      changeImg("second");
    } else if (actualImgName === "second") {
        changeImg("first");
  }
  }

  function changeActiveClass() {
    const dotEl1 = document.getElementById("dot1");
    const dotEl2 = document.getElementById("dot2");
    const dotEl3 = document.getElementById("dot3");
    const dotEl4 = document.getElementById("dot4");
    
    dotEl1.classList.remove("active");
    dotEl2.classList.remove("active");
    dotEl3.classList.remove("active");
    dotEl4.classList.remove("active");
    
    if(actualImgName === "first"){
      dotEl1.classList.add('active');
    }
    
    if(actualImgName === "second"){
      dotEl2.classList.add("active");
    }
    
    if(actualImgName === "third"){
      dotEl3.classList.add("active");
    }

    if(actualImgName === "fourth"){
        dotEl4.classList.add("active");
      }
  }
