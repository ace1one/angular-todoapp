import { v4 as uuidv4 } from 'uuid';
export class Todo{
    id:string=uuidv4();
    todo:string="";
    done:boolean=false;

}