import {
  Fruit,
  addFruit,
  countSweetFruits,
  getFruitColor,
  isFruitTasteMatching,
} from "../fruits";

describe("Fruits", () => {
  let fruits: Fruit[];

  beforeEach(() => {
    fruits = [
      { id: 501, name: "Apple", color: "Red", taste: "Sweet" },
      { id: 502, name: "Banana", color: "Yellow", taste: "Sweet" },
      { id: 503, name: "Orange", color: "Orange", taste: "Citrusy" },
      { id: 504, name: "Grapes", color: "Purple", taste: "Sweet" },
      { id: 505, name: "Kiwi", color: "Green", taste: "Tangy" },
    ];
  });

  describe("getFruitColor", () => {
    it("should return the color of the fruit", () => {
      for (let fruit of fruits) expect(getFruitColor(fruit)).toBe(fruit.color);
    });
  });

  describe("isFruitTasteMatching", () => {
    it("should return true if the fruit's taste matches the provided description", () => {
      for (let fruit of fruits)
        expect(isFruitTasteMatching(fruit, fruit.taste)).toBe(true);
    });

    it("should return false if the fruit's taste does not match the provided description", () => {
      for (let fruit of fruits)
        expect(isFruitTasteMatching(fruit, "Bitter")).toBe(false);
    });
  });

  describe("addFruit", () => {
    it("should add a new fruit to the end of the array and return the updated array", () => {
      const newFruit = {
        id: 506,
        name: "Mango",
        color: "Yellow",
        taste: "Sweet",
      };
      const { id, name, color, taste } = newFruit;
      const updatedFruits = addFruit([...fruits], id, name, color, taste);
      expect(updatedFruits).toContainEqual(newFruit);
      expect(updatedFruits.length).toBe(fruits.length + 1);
      expect(updatedFruits[updatedFruits.length - 1]).toEqual(newFruit);
    });
  });

  describe("countSweetFruits", () => {
    it("should count the number of fruits with a sweet taste", () => {
      expect(countSweetFruits(fruits)).toBe(3);
      const addedFruits = addFruit(
        [...fruits],
        506,
        "Mango",
        "Yellow",
        "Sweet"
      );
      expect(countSweetFruits(addedFruits)).toBe(4);
    });
  });
});
