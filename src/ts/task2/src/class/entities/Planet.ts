export default class Planet {
  readonly name: string;
  readonly coordinates: [number, number, number, number];
  situation: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado";
  readonly satellites: string[] = [];

  constructor(
    name: string,
    coordinates: [number, number, number, number],
    situation: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado",
  ) {
    this.name = name;
    this.coordinates = coordinates;
    this.situation = situation;
  }
}
