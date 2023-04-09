import React from 'react';
import './table.scss';

class Table extends React.Component {
  render() {
    return (
      <div className="table-container">
        <table>
          <caption>Employee Data</caption>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th rowSpan="2">Name</th>
              <th colSpan="2">Salary</th>
              <th rowSpan="2">Position</th>
            </tr>
            <tr>
              <th>Current</th>
              <th>Projected</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>$75,000</td>
              <td>$85,000</td>
              <td>Manager</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>$60,000</td>
              <td>$70,000</td>
              <td>Developer</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Data is current as of April 2023</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Table;
