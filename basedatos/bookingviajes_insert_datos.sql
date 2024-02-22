insert into country values
    (1, "Argentina", "AR"),
    (2, "Bolivia", "BO"),
    (3, "Brasil", "BR"),
    (4, "Chile", "CH"),
    (5, "Colombia", "CO"),
    (6, "Costa Rica", "CR"), 
    (7, "Cuba", "CU"),
    (8, "Ecuador", "EC"),
    (9, "El Salvador", "SV"),
    (10, "Guatemala", "GT"),
    (11, "Haití", "HT"),
    (12, "Honduras", "HN"),
    (13, "México", "MX"),
    (14, "Nicaragua", "NI"),
    (15, "Panamá", "PA"),
    (16, "Paraguay", "PY"),
    (17, "Perú", "PE"),
    (18, "Republica Dominicana", "DO"),
    (19, "Uruguay", "UY"),
    (20, "Venezuela", "VE");

insert into city values 
	(1, 'Buenos Aires', 1),
	(2, 'Catamarca', 1),
	(3, 'Mar del Plata', 1),
	(4, 'Córdoba', 1),
	(5, 'Mendoza', 1),
	(6, 'San Carlos de Bariloche', 1),
	(7, 'Bogotá', 5),
	(8, 'Rio de Janeiro', 3),
	(9, 'Cancún', 13),
	(10, 'Lima', 17),
	(11, 'Magangué', 5);

insert into category values
	( 1, 'All Inclusive', 'Todo Incluido', 'https://sevenstaraward.com/uploads/2016/02/news-1.jpg'),
	( 2, 'Escapadas', 'Escapadas increibles', 'https://s1.abcstatics.com/media/bienestar/2020/01/29/trekking-kte--1248x698@abc.jpg'),
	( 3, 'Cruceros', 'Navega por lugares', 'https://images.ecestaticos.com/jZjgm6io1r7Zir0LDHGdvKhLrp4=/4x110:2126x1301/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3cf%2F5ed%2F1b1%2F3cf5ed1b1140b545d252ab90a510122e.jpg'),
	( 4, 'Salidas Grupales', 'Mucho para hacer', 'https://milhousehostel.com/wp-content/uploads/2021/03/4476211-1393373_314_0_3439_2750_1000_800-605x465.jpg'),
	( 5, 'Playas', 'En la Playa', 'https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg');


insert into product (id, name, description, short_description, active, address, latitude, longitude, area, average_score, category_id, city_id, site_policies, hse_policies, cancellation_policies) values 
	(1, 'Cabaña en Córdoba', 'Hermosa cabaña a las afueras de Córdoba.', '', 1, 'Av Siempre Viva 123', '-1', '-5', '150', '6', 1, 4, "Check-out: 10:30. En esta propiedad no está permitido fumar dentro.","Alarma integrada con sensores aptos para mascotas","La cancelación del paquete deberá ser realizada mínimo 1 semana antes a la fecha de arribo y se le reintegrará un 70% del monto fijado"),
    (2, 'Cabaña en Catamarca', 'Hermosa cabaña a metros del Parque Iberá.', '', 1,"Av Siempre Viva 123",'-1', '-5', '190', '6', 1, 2, "Check-out: 10:30. Se ruega después de las 22:00 hs no hacer ruidos moletos","Detector de humo. Depósito de seguridad","La cancelación del paquete deberá ser realizada mínimo 1 semana antes"),
	(3, 'Cabaña en San Rafael', 'En el corazón de Mendoza, disfruta de un albergue cerca de los mejores viñedos. Un dormitorio matrimonial. Cocina/comedor y estar c/camas de 1 plaza. Cochera cubierta. Amplia galería con parrilla.', '', 1, 'Rafael 123','-37.9702777', '-57.5955626', '200', '8', 2, 5, "Check-out: 10:00. No se permiten fiestas.","Alarma antirobo, cajafuerte y detectores de humo","La cancelación del paquete deberá ser realizada mínimo 1 semana antes"),
    (4, 'Cabaña De Colores', 'De Colores está localizado en San Carlos de Bariloche. Cuenta con piscina climatizada y wi-fi gratis en zonas comunes, además de servicio de masajes.', '', 1, 'Bariloche 123','-98.9702777', '-23.5626', '225', '9', 2, 6, "Check-out: 10:00. No está permitido hacer fiestas ni eventos.","Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus. Detector de humo. Depósito de seguridad","La cancelación del paquete deberá ser realizada mínimo 1 semana antes"),
    (5, 'Crucero Rio Bello', 'Dispuestas sobre una plataforma, están completamente amobladas.', '', 1, 'Rio de Janeiro 123','-37', '-57', '100', '7', 3, 8,"Check-out: 13:00. No se permiten fiestas privadas en los camarotes. No se permite fumar en las habitaciones","Detector de humo. Depósito de seguridad","La cancelación del paquete deberá ser realizada mínimo 1 semana antes"),
    (6, 'Crucero Icon Bogotá', 'Ofrecen camas reales con lencería de alta calidad, aire acondicionado y calefacción.', '', 1, 'Bogotá 123','-37.9702777', '-57.5955626', '125', '7', 3, 7, "Check-out: 13:00. No se permiten fiestas privadas en los camarotes. No se permite fumar en las habitaciones","Detector de humo. Depósito de seguridad","La cancelación del paquete deberá ser realizada mínimo 1 semana antes"),
	(7, 'Apartamento en Bs. As.', 'Hostel, que cuenta con salón de uso común, terrazay bar, se encuentra en el centro de Buenos Aires.', '', 1, 'Bs As 123','-37.9702777', '-57.5955626', '225', '10', 4, 1, "Check-out: 10:00. No se permiten fiestas. No se permite fumar","Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus. Detector de humo. Depósito de seguridad","La cancelación del paquete deberá ser realizada mínimo 1 semana antes"),
	(8, 'Hostel en Lima', 'Hostel, que cuenta con salón de uso común, terrazay bar, se encuentra en el centro de Lima.', '', 1, 'Calle 7 y 54','-37.9702777', '-57.5955626', '175', '4', 4, 10, "Check-out: 10:00. No se permiten fiestas","Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus. Detector de humo. Depósito de seguridad","La cancelación del paquete deberá ser realizada mínimo 1 semana antes"),
    (9, 'Hotel "Mar Del Plata"', 'Maravilloso hotel en Mar del Plata', '', 1, 'Av Luro 234','-37.9702777', '-57.5955626', '300', '8', 5, 3, "Check-out: 10:00. No se permiten fiestas","Detector de humo. Depósito de seguridad","La cancelación del paquete deberá ser realizada mínimo 1 semana antes"),
    (10, 'Hard Rock Hotel', 'Hard Rock Hotel Cancun está localizado en Cancún. Dispone de club de playa, piscina al aire libre todo el año y wi-fi gratis en zonas comunes, además de bañera / tina de hidromasaje.', '', 1, 'Cancún 456','-37.9702777', '-57.5955626', '230', '5', 5, 9, "Check-out: 11:00. No se permiten fiestas. No se permite fumar","Detector de humo. Depósito de seguridad","La cancelación del paquete deberá ser realizada mínimo 1 semana antes");

insert into image values
    (1, 'image Córdoba rios ', 'https://hoydia.com.ar/wp-content/uploads/2022/01/Rios-de-Cordoba2.webp', 1),
    (2, 'image Córdoba rios', 'https://www.cadena3.com/admin/playerswf/fotos/ARCHI_822924.jpg', 1),
	(3, 'image Córdoba rios', 'https://soldepiedra.com.ar/wp-content/uploads/2015/01/rios-cordoba-argentina.jpg', 1),
	(4, 'image Córdoba rios', 'https://www.cordobaturismo.gov.ar/wp-content/uploads/2019/12/san-miguel-2-1.jpg', 1),  
	(5, 'image Córdoba rios', 'https://i.pinimg.com/736x/05/98/05/059805294bd0b5c2f01b2015a0742c56.jpg', 1),
    (6, 'image Catamarca rios', 'https://parqueibera.gob.ar/wp-content/uploads/2021/10/Portal-Rio-Corriente.jpg', 2),
	(7, 'image Catamarca rios', 'https://parqueibera.gob.ar/wp-content/uploads/2021/10/Edwin-Harvey-IMG_7037.jpg', 2),
	(8, 'image Catamarca rios', 'https://parqueibera.gob.ar/wp-content/uploads/2021/10/Edwin-Harvey-_MG_8971.jpg', 2),
	(9, 'image Catamarca rios', 'https://parqueibera.gob.ar/wp-content/uploads/2021/10/DJI_0097Di%CC%81a-1_-Ri%CC%81o-Corriente_NORTE.jpg', 2),
	(10, 'image Catamarca rios', 'https://parqueibera.gob.ar/wp-content/uploads/2021/10/Rio-Corriente-581-1536x1024.jpg', 2),
    (11, 'image Cabaña Mendoza', 'https://www.sanrafael.com.ar/backend/sites/default/files/styles/comercios__690x460_/public/comercio/file/ajax/field_comercio_galeria/und/form-XRVwwsE_CqjY4WxasgVS23A4UhNHJrtH3WWGa_X_cSw/galeria/foto5.jpg?itok=_-niKxmq', 3),
    (12, 'image Cabaña Mendoza', 'https://mendoza-camara.org/wp-content/uploads/2022/01/Rio-Atuel-San-Rafael.jpg', 3),
    (13, 'image Cabaña Mendoza', 'https://latitur.com/uploads/media/cactus_product_tours_by_locals/7229.contacto@millantiviajes.com.ar/13705/thumb_13705_cactus_product_tours_by_locals_large.jpeg', 3),
    (14, 'image Cabaña Mendoza', 'https://mendoza-camara.org/wp-content/uploads/2019/01/Bodegas-de-San-Rafael-1.jpg', 3),
    (15, 'image Cabaña Mendoza', 'https://www.clarin.com/2019/01/04/2w8UWGq8U_720x0__1.jpg', 3),
    (16, 'image Cabaña de Colores', 'https://lh3.googleusercontent.com/proxy/RrpJyjltGjeKkOVNEZJg0eO687ZB5zJZZ1PCfClqoKWKdCcHhHCDGNllT-LFII1pLHCaQyMM0RCY8eCbwoph-JhxaLmjvDBK8q-2j9XNMyaShPSef4rSydao2Zcj9HtM16boyiUbUXNIGi1jUKffXpyNqWkKAGY=w574-h384-n-k-no-v1-rj', 4),
	(17, 'image Cabaña de Colores', 'https://www.barilocheyvillalaangostura.com.ar/wp-content/uploads/2022/03/cerro-catedral-bariloche.jpg', 4),
	(18, 'image Cabaña de Colores', 'https://live.staticflickr.com/65535/53208348051_db62514125_k.jpg', 4),
	(19, 'image Cabaña de Colores', 'https://services.meteored.com/img/article/bariloche-premiado-uno-de-los-mejores-destinos-del-mundo-para-esquiar-nieve-catedral-patagonia-argentina-invierno-1653905368512_1280.jpg', 4),
	(20, 'image Cabaña de Colores', 'https://bariloche.org/wp-content/uploads/2021/09/BarilocheOrg-brazo-tristeza.jpg', 4),
    (21, 'image Rio de Janeiro', 'https://i0.wp.com/imaginariodejaneiro.com/wp-content/uploads/2016/11/Rio-de-Janeiro-Crucero.jpg', 5),
	(22, 'image Rio de Janeiro', 'https://www.costacruceros.com/content/dam/costa/inventory-assets/ports/RIO/c035_rio_de_janeiro.jpg.image.2048.1536.medium.jpg', 5),
	(23, 'image Rio de Janeiro', 'https://www.costacruceros.es/content/dam/costa/inventory-assets/destinations/SA/C037_2_Rio-de-janeiro.jpg.image.1125.1446.low.jpg', 5),
	(24, 'image Rio de Janeiro', 'https://www.taoticket.com.ar/bundles/semplicecrociere/images/navi/msc-crociere-msc-seaview-02.webp', 5),
	(25, 'image Rio de Janeiro', 'https://www.clarin.com/2018/02/25/B1zdJUl_f_1200x0__1.jpg', 5),
    (26, 'image Crucero Icon Bogotá', 'https://promociones-aereas.com.ar/wp-content/uploads/2023/07/royal-3.jpeg', 6),
	(27, 'image Crucero Icon Bogotá', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/8d/0f/9a/descubre-en-nuestros.jpg?w=600&h=400&s=1', 6),
	(28, 'image Crucero Icon Bogotá', 'https://mediaim.expedia.com/destination/1/90bcaa54866d7bc14a42e220a653de95.jpg', 6),
	(29, 'image Crucero Icon Bogotá', 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/63000/63106-Bogota.jpg', 6),
	(30, 'image Crucero Icon Bogotá', 'https://media.staticontent.com/media/pictures/03a24116-8322-46ad-9f06-a629c59c216c', 6),
    (31, 'image Apartamento Bs. As.', 'https://upload.wikimedia.org/wikipedia/commons/0/00/ObeliscoBA2015.2.jpg', 7),
    (32, 'image Apartamento Bs. As.', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/334289489.jpg?k=87077cac06e75b1569cf682eeb842652784b24ef3b5971882e8cce08ed49ab79&o=&hp=1', 7),
    (33, 'image Apartamento Bs. As.', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/249652278.jpg?k=de480b0f35d3ebd4c888855016ab32a5e18f4e413f8360516c96cd40b94ec3cf&o=&hp=1', 7),
    (34, 'image Apartamento Bs. As.', 'https://elcomercio.pe/resizer/nSIlLxCB3h_D_9Zy4w1QVtaMCmA=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZT572X7RBVEKFC3OEJQZ7GRWWQ.jpg', 7),
    (35, 'image Apartamento Bs. As.', 'https://www.edreams.es/blog/wp-content/uploads/sites/5/2015/02/Plaza-de-Mayo-Buenos-Aires.jpg', 7),
    (36, 'image Hostel Lima', 'https://whatatrip.pe/wp-content/uploads/2023/06/miraflores-view.png', 8),
    (37, 'image Hostel Lima', 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/XJ6ON4Q6RFEHFCFWYE7QHZEAIQ.jpg', 8),
    (38, 'image Hostel Lima', 'https://www.exoticca.com/es/blog/wp-content/uploads/2020/02/Que%CC%81-ver-en-Lima-en-un-di%CC%81a.jpg', 8),
    (39, 'image Hostel Lima', 'https://media.istockphoto.com/id/1435068849/es/foto/chabola-en-lima-per%C3%BA-las-casas-una-vez-grises-del-empobrecido-distrito-de-la-capital-peruana.jpg?s=612x612&w=0&k=20&c=tg0xUCdaLfW9-2l1UkCfnivY_4HvMEOVZzV1sfkx0A0=', 8),
    (40, 'image Hostel Lima', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrVNESwfMLksSesfkjrRIho3VuJ2-aOb9nw&usqp=CAU', 8),  
    (41, 'image Playa Mar del Plata', 'https://content.r9cdn.net/rimg/dimg/42/2f/addb7f9b-city-4012-16916c05055.jpg?crop=true&width=1366&height=768&xhint=1627&yhint=1054', 9),
	(42, 'image Playa Mar del Plata', 'https://images.trvl-media.com/lodging/33000000/32950000/32942300/32942208/f0c79b82_y.jpg', 9),
	(43, 'image Playa Mar del Plata', 'https://www.mardelplata.gob.ar/sites/default/files/texto_slide/xMDP2.jpg.pagespeed.ic.oKataM9oHk.jpg', 9),
	(44, 'image Playa Mar del Plata', 'https://puntonoticias.com/wp-content/uploads/2023/02/Mar-del-Plata-playas.jpg', 9),
	(45, 'image Playa Mar del Plata', 'https://bucket.somosohlala.com.ar/s3fs-public/styles/internal_990/public/2022-12/4_1.jpg.webp?itok=AULbqv-x', 9),
    (46, 'image Playa Cancún', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/2f/da/9a/hrhcancun-exterior.jpg?w=700&h=-1&s=1', 10),
	(47, 'image Playa Cancún', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/a2/a4/a6/hard-rock-hotel-cancun.jpg?w=700&h=-1&s=1', 10),
	(48, 'image Playa Cancún', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/12947977.jpg?k=6351a5ab2b3d04ba337aecf2bf6a5e18be898bdd701508ae3b1b78689a921f76&o=&hp=1', 10),
	(49, 'image Playa Cancún', 'https://media.tacdn.com/media/attractions-content--1x-1/12/29/06/2b.jpg', 10),
	(50, 'image Playa Cancún', 'https://blog.vivaaerobus.com/wp-content/uploads/2019/12/Mejores-Playas-de-Canc%C3%BAn.jpg', 10);
    
insert into role values
	(1, "USER"),
	(2, "ADMIN");
    
insert into user values
    (1, 'Daniel', 'Rizzuti', 'daniel@viajes.com', '$2a$10$izo/rgH5EsHpxc43gOfXWeJThcD6mGnt88jm/LijDRdJGMay4x4Ba', 1, 1, 2),
    (2, 'Gonzalo', 'Pena', 'gonzaloP@viajes.com', '$2a$10$izo/rgH5EsHpxc43gOfXWeJThcD6mGnt88jm/LijDRdJGMay4x4Ba', 1, 1, 2),
    (3, 'Fernando', 'Conil', 'fernando@viajes.com', '$2a$10$izo/rgH5EsHpxc43gOfXWeJThcD6mGnt88jm/LijDRdJGMay4x4Ba', 1, 11,2),
    (4, 'Mathias', 'Silveira', 'mathias@viajes.com', '$2a$10$izo/rgH5EsHpxc43gOfXWeJThcD6mGnt88jm/LijDRdJGMay4x4Ba', 1, 7,2),
    (5, 'Agustin', 'Scanavino', 'agustin@viajes.com', '$2a$10$izo/rgH5EsHpxc43gOfXWeJThcD6mGnt88jm/LijDRdJGMay4x4Ba', 1, 8,2),
    (6, 'Gonzalo', 'Ortiz', 'gonzalo@viajes.com', '$2a$10$izo/rgH5EsHpxc43gOfXWeJThcD6mGnt88jm/LijDRdJGMay4x4Ba', 1, 7,2),
    (7, 'Lilen', 'Romano', 'lilen@viajes.com', '$2a$10$izo/rgH5EsHpxc43gOfXWeJThcD6mGnt88jm/LijDRdJGMay4x4Ba', 1, 1, 2),
    (8, 'Geronimo', 'Monzon', 'geronimo@viajes.com', '$2a$10$izo/rgH5EsHpxc43gOfXWeJThcD6mGnt88jm/LijDRdJGMay4x4Ba', 1, 1, 2);
    
insert into reservation values
(1, '10:30:00', '2022-11-24', '2022-12-08', 'Llevo mi mascota', 6, 4),
(2, '11:00:00', '2023/01/01', '2023/01/05', 'Puedo demorarme 30 minutos', 6, 4),
(3, '10:30:00', '2022/12/16', '2022-12-26', 'Llevo mi mascota', 1, 1),
(4, '10:30:00', '2022/12/23', '2023-01-08', 'Llevo mi mascota', 2, 2);

INSERT into spec
VALUES
(1, "Wifi", "faWifi"),
(2, "Estacionamiento gratuito", "faCar"),
(3, "Aire Acondicionado", "faSnowflake"),
(4, "Apto Mascotas", "faPaw"),
(5, "Televisor", "faTv"),
(6, "Pileta", "faSwimmer"),
(7, "Prohibido fumar", "faBanSmoking"),
(8, "Cocina", "faFireBurner");

INSERT into product_spec VALUES 
(1, 1),
(1, 2),
(1, 4),
(1, 5),
(1, 7),
(1, 8),
(2, 1),
(2, 2),
(2, 5),
(3, 4),
(3, 5),
(3, 7),
(4, 4),
(5, 7),
(6, 1),
(6, 5),
(6, 7),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(7, 5),
(7, 6),
(8, 1),
(8, 3),
(8, 5),
(9, 4),
(9, 5),
(9, 7),
(10, 4),
(10, 5);



