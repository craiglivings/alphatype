import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  text = "Aa";
  name = "amber";
  image = "amber.jpg";

  letters = {
    a: { text: "amber", image: "amber.jpg" },
    b: { text: "banana", image: "banana.jfif" },
    c: { text: "cat", image: "cat.jpeg" },
    d: { text: "daddy", image: "daddy.jpg" },
    e: { text: "elephant", image: "elephant.jpg" },
    f: { text: "fox", image: "fox.jpg" },
    g: { text: "giraffe", image: "giraffe.jpg" },
    h: { text: "house", image: "house.jpg" },
    i: { text: "ice cream", image: "icecream.jpg" },
    j: { text: "jug", image: "jug.jpg" },
    k: { text: "kangaroo", image: "kangaroo.jpg" },
    l: { text: "lion", image: "lion.jpg" },
    m: { text: "mummy", image: "jen.jpg" },
    n: { text: "nana" },
    o: { text: "owl", image: "owl.jpg" },
    p: { text: "pape" },
    q: { text: "quilt", image: "quilt.jpg" },
    r: { text: "rat", image: "rat.jpg" },
    s: { text: "sophie", image: "sophie.jpg" },
    t: { text: "tree", image: "tree.jpg" },
    u: { text: "umbrella", image: "umbrella.jpg" },
    v: { text: "van", image: "van.jpg" },
    w: { text: "wolf", image: "wolf.jpg" },
    x: { text: "xray", image: "xray.jpg" },
    y: { text: "yogurt", image: "yogurt.jpg" },
    z: { text: "zebra", image: "zebra.jpg" }
  };

  isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  updateLetter(key) {
    if (this.isLetter(key)) {
      this.text = key.toUpperCase() + key.toLowerCase();
      this.name = this.letters[key] ? this.letters[key].text : "";
      this.image = this.letters[key].image;
    } else {
      this.text = key;
    }
  }

  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent = (event: KeyboardEvent) => {
    const key = event.key;
    this.updateLetter(key.toLowerCase());
  };
}
