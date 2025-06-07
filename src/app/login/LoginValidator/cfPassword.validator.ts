// import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";
// export function cfPasswordValidator(abstractControl:FormGroup) : {[key:string]:string}| boolean|null{
   
//     if(abstractControl.get('cfPassword')?.value != abstractControl.get('cfPassword')?.value){
//         return true
//     }
//     return null
// }

import { FormGroup } from '@angular/forms';
    
export function cfPasswordValidator() {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls['password'];
        const matchingControl = formGroup.controls['cfPassword'];
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true,messa:'not match' });
        } else {
            matchingControl.setErrors(null);
        }
        
    }
}