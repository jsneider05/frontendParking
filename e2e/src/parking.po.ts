import { browser, ElementFinder, $, ProtractorExpectedConditions, ExpectedConditions, by } from 'protractor';

export class parkingPage{

    public until: ProtractorExpectedConditions;

    constructor(){
        this.until = ExpectedConditions;
    }

    public async navigateTo(): Promise<void>{
        await browser.get('http://localhost:4200/createVehicleComponent')
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

    public async esperarDesaparcion(elemento: ElementFinder): Promise<void>{
        const id = elemento.getId();
        await browser.wait(this.until.presenceOf(elemento), 5000, 'El elemento '+id+' tardo mucho en desaparecer');
    }

    public async esperarExistenciaToast(): Promise<void>{
        await  this.esperarExistencia(this.getMensajeToast());
    }

    public async esperarDesaparicionToast(): Promise<void>{
        await  this.esperarDesaparcion(this.getMensajeToast());
    }

    public async setPlate(plate: string): Promise<void>{
        await this.getPlate().sendKeys(plate);
    }

    public async getTextToastMessage(): Promise<string>{
        return await this.getMensajeToast().getText();
    }

    public async clickBtnIngresar(){
        this.getIngresarVehiculo().click();
    }

    async setVehicleTypeOption(optIndex: number): Promise<void> {

        // Tick to wait until options apear
        await browser.sleep(500);
        // End tick
        const options: ElementFinder[] = await this.getTypeVehicle().all(by.tagName('option'));
        options[optIndex].click();
    }

    public async clickSelect(){
        this.getTypeVehicle().click();
    }










    



}
