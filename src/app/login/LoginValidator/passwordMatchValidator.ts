import { FormGroup, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator(form: FormGroup): {[key:string]:string | boolean}|boolean| ValidatorFn | null {
    const password = form.controls['password'].value;
    const password_confirm = form.controls['cfPassword'].value;
    if (!password || !password_confirm) {
        return null;
    }
    // console.log(form.controls['password'].setErrors({password: true}))
    // console.log(form.controls['cfPassword'].setErrors({cfPassword: true}))
    return (password === password_confirm) ? null : { mismatch: true,ERRORmESSAGE:'PASSWORD MISMATCH' };
}