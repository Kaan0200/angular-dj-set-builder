import { Component, input, Input, output } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';

@Component({
    selector: "login-panel",
    imports: [MatIcon, MatButton, MatIconButton, MatInput, MatLabel, MatFormField],
    styles: `
        .login-panel {
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
            position: absolute;
            background-color: grey;
            padding: 2rem;
            z-index: 20;
            border-radius: 1rem;
        }
        .top-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }  
    `,
    template:`
    <div class="login-panel">
        <div>
          <div class="top-header">
            <h3>Login to access your sets</h3>
            <button matIconButton (click)="logout()"><mat-icon>close</mat-icon></button>
          </div>
          <form>
            <div>
                <mat-form-field>
                    <mat-label>Username</mat-label>
                    <input matInput />
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Password</mat-label>
                    <input matInput />
                </mat-form-field>
            </div>
            <div>
                <button matButton>Login</button>
            </div>
          </form>
        </div>
    </div>
    `
})

export class LoginPanel {
    
    close = output<void>();

    public logout() {
        console.log('firing from component');
        this.close.emit();
    }
}