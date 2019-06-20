import { browser, ElementFinder, $, ProtractorExpectedConditions, ExpectedConditions } from 'protractor';
import { baseUrl } from "../protractor.conf.js";

export class parkingPage{

    public until: ProtractorExpectedConditions;

    constructor(){
        this.until = ExpectedConditions;
    }

    public async navigateTo(): Promise<void>{
        return await browser.get(baseUrl + 'createVehicleComponent')
    }

    public getPlate(): ElementFinder{
        return $('#plate')
    }

    public getTypeVehicle(): ElementFinder{
        return $('#typeVehicle')
    }
    
    public getIngresarVehiculo(): ElementFinder{
        return $('#ingresarVehiculo')
    }

    public getMensajeToast(): ElementFinder{
        return $('.toast-message')
    }

    public async esperarExistencia(elemento: ElementFinder): Promise<void>{
        const id = elemento.getId();
        await browser.wait(this.until.presenceOf(elemento), 5000, 'El elemento '+id+' tardo mucho en cargar');
    }

    public async esperarDesaparecion(elemento: ElementFinder): Promise<void>{
        const id = elemento.getId();
        await browser.wait(this.until.presenceOf(elemento), 5000, 'El elemento '+id+' tardo mucho en desaparecer');
    }

}