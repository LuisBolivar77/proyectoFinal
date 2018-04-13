export class Todos {
    id: string;
    descripcion: string;
    estado: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
