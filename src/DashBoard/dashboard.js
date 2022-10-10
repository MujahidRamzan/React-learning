import React from 'react';




import {
    Card,
    CardBody,
    Col,
    Container,
    Row
} from "reactstrap";




const options = {
    chart: {
        height: 50,
        type: "line",
        toolbar: { show: false },
    },
    colors: ["#5156be"],
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    xaxis: {
        labels: {
            show: false
        },
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

const Dashboard = () => {

    //meta title
    document.title = "Dashboard | Minia - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <center>
                    <Row>
                        <Card> <h1>Hello</h1></Card>
                       
                    </Row>

                    </center>
                   
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;