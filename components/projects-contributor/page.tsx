'use client';
import { Card , Row, Col, Typography, Image } from 'antd';
import googlelogo from '@/public/image/google.svg'

export default function ProjectsContributor() {
    const { Title, Text } = Typography;
    return (
        <>
            <Title style={{ fontSize: "24px" }}>Projects Contributor</Title>
            <Row>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Card hoverable bodyStyle={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center"
                    }}>
                        <Image 
                            src={googlelogo.src}
                            width={100}
                            height={100}
                            alt="googl"
                            preview={false}
                        />
                        <div>
                            <Title style={{ fontSize: "24px" }}>Workplaze</Title>
                            <Text>Scope: <b>Frontend</b></Text>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}