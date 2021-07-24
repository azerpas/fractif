import Brand from "./Brand";
import Option from "../types/Option";

class Car {
    private model: string;
    private pack: string;
    private name: string;
    private brand: Brand;
    private km: number;
    private year: number;
    private options: Option[];
}

export default Car;