import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    disclamier(){
      Swal.fire({
        title: 'Diclamier',
        width:600,
        text: 'To comply with regulations stipulated by the Code of Ethics prescribed by Institute of Chartered Accountants (ICAI) of India that does not permit solicitation in any form or manner, by accessing this site you acknowledge that you are seeking information of your own accord and volition and that no form of solicitation has taken place by Jaisinghani Jain & Associates or its members. This site (www.cajandj.com) should not be construed as an attempt to create a CA-client relationship of any manner. This site is meant to provide information to those who specifically request this information and does not purport to be exhaustive in relation to the information contained herein. Jaisinghani Jain & Associates does not assume any responsibility for any acts or omissions arising from the use of information provided on this site and visitors to this site are advised to seek independent professional guidance before proceeding to act on any information provided herein.',
        confirmButtonText: 'Proceed',
  
      });
    }
  }

