import { bootstrapApplication } from '@angular/platform-browser';
import { EmployeeSalaryCalculatorComponent } from './app/components/employee-salary-calculator/employee-salary-calculator.component';

bootstrapApplication(EmployeeSalaryCalculatorComponent)
  .catch(err => console.error(err));
