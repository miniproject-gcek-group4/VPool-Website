let sections = gsap.utils.toArray("section"),
  currentSection = sections[0];
let colors = [
  {
    backgroundColor: "#6411a9",
    head: "<h1><span style='font-size: 7rem;'>V</span>Pool</h1>",
  },
  {
    backgroundColor: "#4e27ce",
    head: "<h1><span style='font-size: 7rem;'>V</span>Pool</h1>",
  },
  {
    backgroundColor: "#0f113b",
    head: "<h1><span style='font-size: 7rem;'>V</span>Pool</h1>",
  },
  {
    backgroundColor: "#17263c",
    head: "<h1><span style='font-size: 7rem;'>V</span>Pool</h1>",
  },
  {
    backgroundColor: "#134ca2",
    head: "<h1><span style='font-size: 7rem;'>V</span>Pool</h1>",
  },
  {
    backgroundColor: "#022b92",
    head: "<h1><span style='font-size: 7rem;'>V</span>Pool</h1>",
  },
  {
    backgroundColor: "#01824d",
    head: "<h1><span style='font-size: 7rem;'>V</span>Pool</h1>",
  },
];

document.body.style.backgroundColor = colors[0].backgroundColor;
document.querySelector("svg").style.backgroundColor = colors[0].backgroundColor;
document.getElementById("Opaque_Ring").style.strokeDasharray = "0 , 1000";
document.querySelector(".dotsst").style.fill = "rgb(0, 155, 255)";
document.querySelector(".dotsst").style.opacity = "1";

gsap.to(document.querySelectorAll(".com #slide1 .images img")[0], {
  duration: 1,
  x: -200,
});
gsap.to(document.querySelectorAll(".com #slide1 .images img")[1], {
  duration: 1,
  x: 200,
});
gsap.to(document.querySelectorAll(".com #slide1 .images img")[2], {
  duration: 1,
  y: -200,
});
document.querySelector(".head .animates").innerHTML = colors[0].head;
gsap.to(".head .animates", {
  duration: 0.5,
  autoAlpha: 1,
  y: 50,
});

gsap.defaults({ overwrite: "auto", duration: 0.3 });

// stretch out the body height according to however many sections there are.
gsap.set("body", { height: sections.length * 100 + "vh" });

// create a ScrollTrigger for each section
sections.forEach((section, i) => {
  ScrollTrigger.create({
    // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
    start: () => (i - 0.5) * innerHeight,
    end: () => (i + 0.5) * innerHeight,
    // when a new section activates (from either direction), set the section accordinglyl.
    onToggle: (self) => self.isActive && setSection(section),
  });
});

let changing = false;

function setSection(newSection) {
  if (newSection !== currentSection && window.innerWidth > 600 && !changing) {
    changing = true;
    let index = sections.indexOf(newSection);
    gsap.to(document.querySelectorAll(".com #slide1 .images img")[0], {
      duration: 1,
      x: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide1 .images img")[1], {
      duration: 1,
      x: -200,
    });
    gsap.to(document.querySelectorAll(".com #slide1 .images img")[2], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide2 .images img")[0], {
      duration: 1,
      x: -200,
    });
    gsap.to(document.querySelectorAll(".com #slide2 .images img")[1], {
      duration: 1,
      x: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide3 .images img")[0], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll(".com #slide3 .images img")[1], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll(".com #slide3 .images img")[2], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide3 .images img")[3], {
      duration: 1,
      y: 200,
    });
    gsap.to(currentSection.querySelector(".text p"), {
      duration: 0.5,
      autoAlpha: 0,
      y: 25,
    });
    gsap.to(currentSection.querySelector(".text div"), {
      duration: 0.5,
      autoAlpha: 0,
      y: 25,
    });
    gsap.to(currentSection.querySelector(".text form"), {
      duration: 0.5,
      autoAlpha: 0,
      y: 25,
    });
    gsap.to(currentSection.querySelector(".text h2"), {
      duration: 0.5,
      autoAlpha: 0,
    });
    gsap.to(currentSection, { delay: 0.5, duration: 0.5, autoAlpha: 0 });
    gsap.to(newSection, { delay: 0.5, duration: 0.5, autoAlpha: 1 });
    setTimeout(() => {
      gsap.to(newSection.querySelector(".text h2"), {
        duration: 0.5,
        autoAlpha: 1,
      });
      gsap.to(newSection.querySelector(".text p"), {
        duration: 0.5,
        autoAlpha: 1,
        y: -25,
      });
      gsap.to(newSection.querySelector(".text div"), {
        duration: 0.5,
        autoAlpha: 1,
        y: -25,
      });
      gsap.to(newSection.querySelector(".text form"), {
        duration: 0.5,
        autoAlpha: 1,
        y: -25,
      });
      if (index == 3) {
        document.querySelector(".slider").style.display = "none";
      } else {
        document.querySelector(".slider").style.display = "block";
      }
      if (index == 0) {
        const counterUp = window.counterUp.default;
        document.querySelectorAll(".intro p span").forEach((el) => {
          counterUp(el, {
            duration: 500,
            delay: 5,
          });
        });
        gsap.to(document.querySelectorAll(".com #slide1 .images img")[0], {
          duration: 1,
          x: -200,
        });
        gsap.to(document.querySelectorAll(".com #slide1 .images img")[1], {
          duration: 1,
          x: 200,
        });
        gsap.to(document.querySelectorAll(".com #slide1 .images img")[2], {
          duration: 1,
          y: -200,
        });
      } else if (index == 1) {
        gsap.to(newSection.querySelectorAll(".com .images img")[0], {
          duration: 1,
          x: 200,
        });
        gsap.to(newSection.querySelectorAll(".com .images img")[1], {
          duration: 1,
          x: -200,
        });
      } else if (index == 2) {
        gsap.to(newSection.querySelectorAll(".com .images img")[0], {
          duration: 1,
          y: 200,
        });
        gsap.to(newSection.querySelectorAll(".com .images img")[1], {
          duration: 1,
          y: 200,
        });
        gsap.to(newSection.querySelectorAll(".com .images img")[2], {
          duration: 1,
          y: -200,
        });
        gsap.to(newSection.querySelectorAll(".com .images img")[3], {
          duration: 1,
          y: -200,
        });
      }
      gsap.to(".head .animates", {
        y: 150,
        autoAlpha: 1,
        duration: 0.5,
        onComplete: () => {
          gsap.to(".head .animates", {
            y: -150,
            autoAlpha: 0,
            duration: 0,
            onComplete: () => {
              document.querySelector(".head .animates").innerHTML =
                colors[index].head;
              gsap.to(".head .animates", {
                y: 50,
                autoAlpha: 1,
                duration: 0.5,
              });
            },
          });
        },
      });

      currentSection = newSection;
      document.body.style.backgroundColor = colors[index].backgroundColor;
      let slideCount = index * 140;
      if (index == 4 || index == 5) {
        slideCount -= 20;
      }
      document.querySelector("svg").style.backgroundColor =
        colors[index].backgroundColor;
      document.getElementById("Opaque_Ring").style.strokeDasharray =
        slideCount + ", 1000";
      document.querySelectorAll(".dotsst").forEach((dot, i) => {
        if (i <= index) {
          dot.style.fill = "rgb(0, 155, 255)";
          dot.style.opacity = "1";
        } else {
          dot.style.fill = "#ffffff";
          dot.style.opacity = "0.4";
        }
      });
      changing = false;
    }, 500);
  }
}

const topics = [
  "VPool have advance functionality to selecting best traveling route by providing starting and ending location. Each user can give feedback directly to developer from the application. After each ride user can rate the driver and provide feedback.",
  "Each user is verified using Adhaar while signing up, So if anything wrong happens can easily identify the person. When traveling starts qr scanning is used to verify driver. When trip finishes driver asks for passengers otp to verify trip completed",
  "If a person want a lift to somewhere, driver can now easily identify who is asking lift for their safety. When passenger scans driver QRcode, VPool automatically adds a trip for identity verification",
  "Driver can decide how much is cost of the trip. The cost is divided equally among seats available and the driver. Driver has to pay their part, So we can make sure driver don't cancel the trip after booking. Money obtained while booking trip is transferred to driver after trip ends. After trip both driver and passenger get rewarded with coupons",
];

let selected = 0;

document.querySelectorAll(".com .topics p").forEach((e, i) => {
  e.addEventListener("click", () => {
    document.querySelector(".com .selected").classList.remove("selected");
    document
      .querySelectorAll(".com #slide3 .images img")
      [selected].classList.remove("selected");
    e.classList.add("selected");
    selected = i;
    document.querySelector(".com .topics-images p").innerHTML = topics[i];
    document
      .querySelectorAll(".com #slide3 .images img")
      [i].classList.add("selected");
  });
});

const download = () => {
  // todo
};

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  if (
    e.target.name.value &&
    e.target.phone.value &&
    e.target.subject.value &&
    e.target.description.value
  ) {
    window.alert("Successfully Sent");
  } else {
    window.alert("All Fields Are Required");
  }
};
