import { Pipe, PipeTransform } from "@angular/core"

@Pipe({name: "Date"})

export class DatePipe implements PipeTransform{
    transform(value: Date): string{
        var a = value.toString();
        return a.split(" ")[2]+" "+a.split(" ")[1]+" "+a.split(" ")[3];
    }
}