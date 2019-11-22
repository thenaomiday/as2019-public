import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default () => (
  <Tabs className='clinic-panel'>
    <TabList>
      <Tab>Colorado</Tab>
      <Tab>New Mexico</Tab>
      <Tab>Georgia</Tab>
    </TabList>

    <TabPanel>
        <table>
            <tbody>
                <tr>
                    <td>Clinic name</td>
                    <td>Clinic address</td>
                    <td><a href='tel:123-456-7890'>(123) 456-7890</a></td>
                    <td><a href="https://www.google.com">Clinic website</a></td>
                </tr>
                <tr>
                    <td>Clinic name</td>
                    <td>Clinic address</td>
                    <td><a href='tel:123-456-7890'>(123) 456-7890</a></td>
                    <td><a href="https://www.google.com">Clinic website</a></td>
                </tr>
                <tr>
                    <td>Clinic name</td>
                    <td>Clinic address</td>
                    <td><a href='tel:123-456-7890'>(123) 456-7890</a></td>
                    <td><a href="https://www.google.com">Clinic website</a></td>
                </tr>
            </tbody>
        </table>
    </TabPanel>
    <TabPanel>
        <table>
            <tbody>
                <tr>
                    <td>Clinic name</td>
                    <td>Clinic address</td>
                    <td><a href='tel:123-456-7890'>(123) 456-7890</a></td>
                    <td><a href="https://www.google.com">Clinic website</a></td>
                </tr>
                <tr>
                    <td>Clinic name</td>
                    <td>Clinic address</td>
                    <td><a href='tel:123-456-7890'>(123) 456-7890</a></td>
                    <td><a href="https://www.google.com">Clinic website</a></td>
                </tr>
            </tbody>
        </table>
    </TabPanel>
    <TabPanel>
        <table>
            <tbody>
                <tr>
                    <td>Clinic name</td>
                    <td>Clinic address</td>
                    <td><a href='tel:123-456-7890'>(123) 456-7890</a></td>
                    <td><a href="https://www.google.com">Clinic website</a></td>
                </tr>
            </tbody>
        </table>
    </TabPanel>
  </Tabs>
);
