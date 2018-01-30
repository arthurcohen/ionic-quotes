export class SettingsService{
    private alternativetheme: boolean = false;

    public changeAlternativeTheme(status: boolean){
        this.alternativetheme = status;
        console.log(this.alternativetheme);
    }

    public isAlternativeTheme(){
        return this.alternativetheme;
    }
}
