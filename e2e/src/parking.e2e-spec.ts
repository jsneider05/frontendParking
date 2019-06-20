import { parkingPage } from "./parking.po";
import { browser } from 'protractor';

describe("prueba a la pagina de registrar vehiculos", () => {

    let parkingPo: parkingPage;

    beforeEach(() => {
        parkingPo = new parkingPage();
        parkingPo.navigateTo();
    });

    it("agregar vehiculo", async () => {
        const plate = 'RNH254';
        parkingPo.clickSelect();
        browser.sleep(1000);
        parkingPo.setVehicleTypeOption(1);
        browser.sleep(1000);
        parkingPo.setPlate(plate);
        browser.sleep(1000);
        parkingPo.clickBtnIngresar();
        browser.sleep(1000);
        parkingPo.esperarExistenciaToast();
        browser.sleep(1000);

        const mensajeIngresado: string = await parkingPo.getTextToastMessage();
        expect(mensajeIngresado.trim()).toEqual('Registro exitoso para Carro de placa '+ plate)
    });
});