import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  text = "Aa";
  name = "amber";

  letters = {
    a: { text: "amber" },
    b: { text: "banana" },
    C: { text: "cat" },
    d: { text: "daddy" },
    e: { text: "elephant" },
    f: { text: "fox" },
    g: { text: "giraffe" },
    h: { text: "house" },
    i: { text: "ice cream" },
    j: { text: "jump" },
    k: { text: "king" },
    l: { text: "lion" },
    m: { text: "mummy" },
    n: { text: "nana" },
    o: { text: "owl" },
    p: { text: "pape" },
    q: { text: "queen" },
    r: { text: "rat" },
    s: { text: "sophie" },
    t: { text: "tree" },
    u: { text: "umbrella" },
    v: { text: "van" },
    w: { text: "water" },
    x: { text: "xray" },
    y: { text: "yellow" },
    z: { text: "zebra" }
  };

  isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  updateLetter(key) {
    if (this.isLetter(key)) {
      this.text = key.toUpperCase() + key.toLowerCase();
      this.name = this.letters[key] ? this.letters[key].text : "";
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
