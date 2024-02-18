'use client';
import Link from 'next/link';
import { Card , Row, Col, Typography, Image, Button } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
// assets
import { certification } from '@/libs/data/page';

export default function Certification() {
    const { Title, Text } = Typography;
    return (
        <>
            <Title style={{ fontSize: "24px" }}>Certifications</Title>
            <Row>
                {
                    certification.map((item, i) => {
                        return (
                            <Col xs={24} sm={12} md={8} lg={6} xl={6} key={i}>
                                <Card hoverable style={{ textAlign: "center", borderRadius: "0" }}>
                                    <Image 
                                        src={item.src}
                                        width={100}
                                        height={100}
                                        alt={item.title}
                                        preview={false}
                                    />
                                    <div style={{
                                        marginBottom: "16px",
                                        minHeight: "80px"
                                    }}>
                                        <Title style={{ fontSize: "18px"}}>{item.title}</Title>
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                        >
                                            <Text 
                                                style={{ 
                                                    textAlign: item.dateExpired.length > 0 ? "left" : "center",
                                                    width:  item.dateExpired.length > 0 ? "inherit" : "100%"
                                                }}
                                            >Issued <b>{item.dateIssued}</b></Text>
                                            {
                                                item.dateExpired.length > 0 ? <Text>Expired <b>{item.dateExpired}</b></Text> : null
                                            }
                                        </div>
                                    </div>
                                    <Link href={item.url ?? ""} target={item.url ?? "_blank"} >
                                        <Button shape="round">
                                            Show Credentials
                                            <ExportOutlined />
                                        </Button>
                                    </Link>
                                    
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}