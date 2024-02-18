'use client';
import { Card , Row, Col, Typography, Image } from 'antd';
import { skills } from '@/libs/data/page';

export default function Skills() {
    const { Title, Text } = Typography;
    return (
        <>
            <Title style={{ fontSize: "24px" }}>Skill's</Title>
            <Row gutter={[10, 10]}>
                {
                    skills.map((item, i) => {
                        return (
                            <Col xs={24} sm={12} md={8} lg={6} xl={3}>
                                <Card 
                                    hoverable 
                                    bodyStyle={{
                                        padding: "10px",
                                        display: "flex",
                                        alignContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <div style={{
                                        marginRight: "10px"
                                    }}>
                                        <Image 
                                            src={item.src}
                                            width={30}
                                            height={30}
                                            alt={item.title}
                                            preview={false}
                                            
                                    />
                                    </div>
                                    <Text>{item.title}</Text>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}