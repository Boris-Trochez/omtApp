import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {

  transform( dataSource: any[], mainDataSource: any[], inputValue: string, isInvalid: boolean ){
    let search = inputValue;
    //Create a regular expression that validates if there is a similar match with the input value
    // i, Indicates that the resExp  is not strict about upperCase and lowerCase letters 
    let expression = new RegExp(`${search}.*`, "i");
    
    if( isInvalid === false ) {
      dataSource = mainDataSource;
      dataSource = dataSource?.filter( item => expression.test( item.first_name ) );
    } 
    return dataSource;
  }


}
