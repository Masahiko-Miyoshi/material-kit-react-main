import { Card, CardContent, CardHeader, Divider } from '@mui/material';

const urlName = "https://app.powerbi.com/view?r=eyJrIjoiODllMGJjZjgtNzkwYi00NTFjLWI0NWQtYjM0NmY3NGJlN2JlIiwidCI6IjA5ZDlkYTM0LTY3ZjEtNGYyNC04MGQyLTc3NTgxNWFhMGM0NiJ9&pageName=ReportSection"
const filter = "?filter=Sheet1/SerialNo eq "
const  serialNo = 2;

export const PowerBI= (props) => (
  <Card
    sx={{ height: '100%' , width: '100%' }}
    
    {...props}
  >
    <CardHeader title="G1200 エラー発生頻度" />
    <Divider />
    <CardContent>
        <iframe title="testOpen" 
                width="1000" 
                height="541" 
                // src= "https://app.powerbi.com/view?r=eyJrIjoiODllMGJjZjgtNzkwYi00NTFjLWI0NWQtYjM0NmY3NGJlN2JlIiwidCI6IjA5ZDlkYTM0LTY3ZjEtNGYyNC04MGQyLTc3NTgxNWFhMGM0NiJ9&pageName=ReportSection"
                src = {urlName + filter + serialNo}  
                frameBorder="0" 
                allowFullScreen="true">

        </iframe>
        {/* <iframe title="test" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=6c790a3f-2ef8-45f0-84dd-96d8b093b964&autoAuth=true&ctid=09d9da34-67f1-4f24-80d2-775815aa0c46&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWphcGFuLWVhc3QtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe> */}
    </CardContent>
    
    

  </Card>

);