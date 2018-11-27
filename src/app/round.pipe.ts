import { Pipe, PipeTransform } from "@angular/core"

@Pipe({name: "roundNum"})

export class RoundPipe implements PipeTransform{
    transform(value: number, isUpper: boolean): number{
        if(isUpper){
            return Math.ceil(value);
        } else{
            return Math.floor(value);
        }
        
    }
}