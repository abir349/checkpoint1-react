import React, { Components } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function () {
  return (
    <div>
<h1>form </h1>
<p>Name</p>
  <input type="text" class="form-control" placeholder="name" aria-label="Username" aria-describedby="basic-addon1"/>
<p>Email</p>
  <input type="Email" class="form-control" placeholder="email" aria-label="Username" aria-describedby="basic-addon1"/>

<p>Number</p>
  <input type="text" class="form-control" placeholder="number" aria-label="Username" aria-describedby="basic-addon1"/>

<p>Age</p>
  <input type="text" class="form-control" placeholder="age" aria-label="Username" aria-describedby="basic-addon1"/>

<button type="button" className="btn btn-primary">Submit</button>

    </div>
  )
}
