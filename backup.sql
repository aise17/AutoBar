PGDMP                     	    x           docker    9.3.17    12.4 V    
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    16385    docker    DATABASE     p   CREATE DATABASE docker WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';
    DROP DATABASE docker;
                docker    false            �	          0    25027 
   auth_group 
   TABLE DATA           /   COPY ellibra.auth_group (id, name) FROM stdin;
    ellibra          docker    false    223   �Q       �	          0    25009    django_content_type 
   TABLE DATA           D   COPY ellibra.django_content_type (id, app_label, model) FROM stdin;
    ellibra          docker    false    219   R       �	          0    25019    auth_permission 
   TABLE DATA           O   COPY ellibra.auth_permission (id, name, content_type_id, codename) FROM stdin;
    ellibra          docker    false    221   �R       �	          0    25037    auth_group_permissions 
   TABLE DATA           N   COPY ellibra.auth_group_permissions (id, group_id, permission_id) FROM stdin;
    ellibra          docker    false    225   �U       �	          0    25071    users_usermodel 
   TABLE DATA           �   COPY ellibra.users_usermodel (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined, date_of_birth) FROM stdin;
    ellibra          docker    false    227   �U       �	          0    25129    django_admin_log 
   TABLE DATA           �   COPY ellibra.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
    ellibra          docker    false    233   �U       �	          0    24998    django_migrations 
   TABLE DATA           D   COPY ellibra.django_migrations (id, app, name, applied) FROM stdin;
    ellibra          docker    false    217   �U       

          0    25381    django_session 
   TABLE DATA           Q   COPY ellibra.django_session (session_key, session_data, expire_date) FROM stdin;
    ellibra          docker    false    254   X       �	          0    25153    inventary_category 
   TABLE DATA           �   COPY ellibra.inventary_category (id, name, publish, publish_date, creation_date, modification_date, unpublish_date) FROM stdin;
    ellibra          docker    false    235   "X       �	          0    25215    inventary_mesa 
   TABLE DATA           3   COPY ellibra.inventary_mesa (id, name) FROM stdin;
    ellibra          docker    false    243   ?X       �	          0    25164    inventary_orders 
   TABLE DATA           P   COPY ellibra.inventary_orders (id, creation_date, user_id, mesa_id) FROM stdin;
    ellibra          docker    false    237   \X       
          0    25223    inventary_preparationsite 
   TABLE DATA           >   COPY ellibra.inventary_preparationsite (id, name) FROM stdin;
    ellibra          docker    false    245   yX       �	          0    25172    inventary_product 
   TABLE DATA           �   COPY ellibra.inventary_product (id, name, image, description, allergy, price, publish, publish_date, creation_date, modification_date, unpublish_date, category_id, preparation_site_id) FROM stdin;
    ellibra          docker    false    239   �X       �	          0    25183    inventary_ordersproducts 
   TABLE DATA           d   COPY ellibra.inventary_ordersproducts (id, creation_date, order_product_id, product_id) FROM stdin;
    ellibra          docker    false    241   �X       
          0    25249    oauth2_provider_application 
   TABLE DATA           �   COPY ellibra.oauth2_provider_application (id, client_id, redirect_uris, client_type, authorization_grant_type, client_secret, name, user_id, skip_authorization, created, updated) FROM stdin;
    ellibra          docker    false    247   �X       
          0    25262    oauth2_provider_accesstoken 
   TABLE DATA           �   COPY ellibra.oauth2_provider_accesstoken (id, token, expires, scope, application_id, user_id, created, updated, source_refresh_token_id) FROM stdin;
    ellibra          docker    false    249   �X       
          0    25275    oauth2_provider_grant 
   TABLE DATA           �   COPY ellibra.oauth2_provider_grant (id, code, expires, redirect_uri, scope, application_id, user_id, created, updated, code_challenge, code_challenge_method) FROM stdin;
    ellibra          docker    false    251   
Y       	
          0    25288    oauth2_provider_refreshtoken 
   TABLE DATA           �   COPY ellibra.oauth2_provider_refreshtoken (id, token, access_token_id, application_id, user_id, created, updated, revoked) FROM stdin;
    ellibra          docker    false    253   'Y       �	          0    25084    users_usermodel_groups 
   TABLE DATA           M   COPY ellibra.users_usermodel_groups (id, usermodel_id, group_id) FROM stdin;
    ellibra          docker    false    229   DY       �	          0    25092     users_usermodel_user_permissions 
   TABLE DATA           \   COPY ellibra.users_usermodel_user_permissions (id, usermodel_id, permission_id) FROM stdin;
    ellibra          docker    false    231   aY       �	          0    24631 
   auth_group 
   TABLE DATA           0   COPY lacentro.auth_group (id, name) FROM stdin;
    lacentro          docker    false    184   ~Y       �	          0    24613    django_content_type 
   TABLE DATA           E   COPY lacentro.django_content_type (id, app_label, model) FROM stdin;
    lacentro          docker    false    180   �Y       �	          0    24623    auth_permission 
   TABLE DATA           P   COPY lacentro.auth_permission (id, name, content_type_id, codename) FROM stdin;
    lacentro          docker    false    182   xZ       �	          0    24641    auth_group_permissions 
   TABLE DATA           O   COPY lacentro.auth_group_permissions (id, group_id, permission_id) FROM stdin;
    lacentro          docker    false    186    ]       �	          0    24675    users_usermodel 
   TABLE DATA           �   COPY lacentro.users_usermodel (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined, date_of_birth) FROM stdin;
    lacentro          docker    false    188   =]       �	          0    24733    django_admin_log 
   TABLE DATA           �   COPY lacentro.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
    lacentro          docker    false    194   �]       �	          0    24602    django_migrations 
   TABLE DATA           E   COPY lacentro.django_migrations (id, app, name, applied) FROM stdin;
    lacentro          docker    false    178   �^       �	          0    24985    django_session 
   TABLE DATA           R   COPY lacentro.django_session (session_key, session_data, expire_date) FROM stdin;
    lacentro          docker    false    215   �`       �	          0    24757    inventary_category 
   TABLE DATA           �   COPY lacentro.inventary_category (id, name, publish, publish_date, creation_date, modification_date, unpublish_date) FROM stdin;
    lacentro          docker    false    196   b       �	          0    24819    inventary_mesa 
   TABLE DATA           4   COPY lacentro.inventary_mesa (id, name) FROM stdin;
    lacentro          docker    false    204   rb       �	          0    24768    inventary_orders 
   TABLE DATA           Q   COPY lacentro.inventary_orders (id, creation_date, user_id, mesa_id) FROM stdin;
    lacentro          docker    false    198   �b       �	          0    24827    inventary_preparationsite 
   TABLE DATA           ?   COPY lacentro.inventary_preparationsite (id, name) FROM stdin;
    lacentro          docker    false    206   �b       �	          0    24776    inventary_product 
   TABLE DATA           �   COPY lacentro.inventary_product (id, name, image, description, allergy, price, publish, publish_date, creation_date, modification_date, unpublish_date, category_id, preparation_site_id) FROM stdin;
    lacentro          docker    false    200   �b       �	          0    24787    inventary_ordersproducts 
   TABLE DATA           e   COPY lacentro.inventary_ordersproducts (id, creation_date, order_product_id, product_id) FROM stdin;
    lacentro          docker    false    202   �c       �	          0    24853    oauth2_provider_application 
   TABLE DATA           �   COPY lacentro.oauth2_provider_application (id, client_id, redirect_uris, client_type, authorization_grant_type, client_secret, name, user_id, skip_authorization, created, updated) FROM stdin;
    lacentro          docker    false    208   "d       �	          0    24866    oauth2_provider_accesstoken 
   TABLE DATA           �   COPY lacentro.oauth2_provider_accesstoken (id, token, expires, scope, application_id, user_id, created, updated, source_refresh_token_id) FROM stdin;
    lacentro          docker    false    210   e       �	          0    24879    oauth2_provider_grant 
   TABLE DATA           �   COPY lacentro.oauth2_provider_grant (id, code, expires, redirect_uri, scope, application_id, user_id, created, updated, code_challenge, code_challenge_method) FROM stdin;
    lacentro          docker    false    212   �f       �	          0    24892    oauth2_provider_refreshtoken 
   TABLE DATA           �   COPY lacentro.oauth2_provider_refreshtoken (id, token, access_token_id, application_id, user_id, created, updated, revoked) FROM stdin;
    lacentro          docker    false    214   �f       �	          0    24688    users_usermodel_groups 
   TABLE DATA           N   COPY lacentro.users_usermodel_groups (id, usermodel_id, group_id) FROM stdin;
    lacentro          docker    false    190   h       �	          0    24696     users_usermodel_user_permissions 
   TABLE DATA           ]   COPY lacentro.users_usermodel_user_permissions (id, usermodel_id, permission_id) FROM stdin;
    lacentro          docker    false    192   9h       �	          0    24589    customers_client 
   TABLE DATA           o   COPY public.customers_client (id, domain_url, schema_name, name, paid_until, on_trial, created_on) FROM stdin;
    public          docker    false    176   Vh       �	          0    24578    django_migrations 
   TABLE DATA           C   COPY public.django_migrations (id, app, name, applied) FROM stdin;
    public          docker    false    174   �h       
           0    0    auth_group_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('ellibra.auth_group_id_seq', 1, false);
          ellibra          docker    false    222            
           0    0    auth_group_permissions_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('ellibra.auth_group_permissions_id_seq', 1, false);
          ellibra          docker    false    224            
           0    0    auth_permission_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('ellibra.auth_permission_id_seq', 66, true);
          ellibra          docker    false    220            
           0    0    django_admin_log_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('ellibra.django_admin_log_id_seq', 1, false);
          ellibra          docker    false    232            
           0    0    django_content_type_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('ellibra.django_content_type_id_seq', 33, true);
          ellibra          docker    false    218            
           0    0    django_migrations_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('ellibra.django_migrations_id_seq', 33, true);
          ellibra          docker    false    216            
           0    0    inventary_category_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('ellibra.inventary_category_id_seq', 1, false);
          ellibra          docker    false    234            
           0    0    inventary_mesa_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('ellibra.inventary_mesa_id_seq', 1, false);
          ellibra          docker    false    242            
           0    0    inventary_orders_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('ellibra.inventary_orders_id_seq', 1, false);
          ellibra          docker    false    236            
           0    0    inventary_ordersproducts_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('ellibra.inventary_ordersproducts_id_seq', 1, false);
          ellibra          docker    false    240            
           0    0     inventary_preparationsite_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('ellibra.inventary_preparationsite_id_seq', 1, false);
          ellibra          docker    false    244            
           0    0    inventary_product_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('ellibra.inventary_product_id_seq', 1, false);
          ellibra          docker    false    238            
           0    0 "   oauth2_provider_accesstoken_id_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('ellibra.oauth2_provider_accesstoken_id_seq', 1, false);
          ellibra          docker    false    248            
           0    0 "   oauth2_provider_application_id_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('ellibra.oauth2_provider_application_id_seq', 1, false);
          ellibra          docker    false    246            
           0    0    oauth2_provider_grant_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('ellibra.oauth2_provider_grant_id_seq', 1, false);
          ellibra          docker    false    250             
           0    0 #   oauth2_provider_refreshtoken_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('ellibra.oauth2_provider_refreshtoken_id_seq', 1, false);
          ellibra          docker    false    252            !
           0    0    users_usermodel_groups_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('ellibra.users_usermodel_groups_id_seq', 1, false);
          ellibra          docker    false    228            "
           0    0    users_usermodel_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('ellibra.users_usermodel_id_seq', 1, false);
          ellibra          docker    false    226            #
           0    0 '   users_usermodel_user_permissions_id_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('ellibra.users_usermodel_user_permissions_id_seq', 1, false);
          ellibra          docker    false    230            $
           0    0    auth_group_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('lacentro.auth_group_id_seq', 1, false);
          lacentro          docker    false    183            %
           0    0    auth_group_permissions_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('lacentro.auth_group_permissions_id_seq', 1, false);
          lacentro          docker    false    185            &
           0    0    auth_permission_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('lacentro.auth_permission_id_seq', 66, true);
          lacentro          docker    false    181            '
           0    0    django_admin_log_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('lacentro.django_admin_log_id_seq', 95, true);
          lacentro          docker    false    193            (
           0    0    django_content_type_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('lacentro.django_content_type_id_seq', 33, true);
          lacentro          docker    false    179            )
           0    0    django_migrations_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('lacentro.django_migrations_id_seq', 33, true);
          lacentro          docker    false    177            *
           0    0    inventary_category_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('lacentro.inventary_category_id_seq', 35, true);
          lacentro          docker    false    195            +
           0    0    inventary_mesa_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('lacentro.inventary_mesa_id_seq', 2, true);
          lacentro          docker    false    203            ,
           0    0    inventary_orders_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('lacentro.inventary_orders_id_seq', 38, true);
          lacentro          docker    false    197            -
           0    0    inventary_ordersproducts_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('lacentro.inventary_ordersproducts_id_seq', 37, true);
          lacentro          docker    false    201            .
           0    0     inventary_preparationsite_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('lacentro.inventary_preparationsite_id_seq', 2, true);
          lacentro          docker    false    205            /
           0    0    inventary_product_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('lacentro.inventary_product_id_seq', 13, true);
          lacentro          docker    false    199            0
           0    0 "   oauth2_provider_accesstoken_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('lacentro.oauth2_provider_accesstoken_id_seq', 41, true);
          lacentro          docker    false    209            1
           0    0 "   oauth2_provider_application_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('lacentro.oauth2_provider_application_id_seq', 35, true);
          lacentro          docker    false    207            2
           0    0    oauth2_provider_grant_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('lacentro.oauth2_provider_grant_id_seq', 1, false);
          lacentro          docker    false    211            3
           0    0 #   oauth2_provider_refreshtoken_id_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('lacentro.oauth2_provider_refreshtoken_id_seq', 41, true);
          lacentro          docker    false    213            4
           0    0    users_usermodel_groups_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('lacentro.users_usermodel_groups_id_seq', 1, false);
          lacentro          docker    false    189            5
           0    0    users_usermodel_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('lacentro.users_usermodel_id_seq', 1, true);
          lacentro          docker    false    187            6
           0    0 '   users_usermodel_user_permissions_id_seq    SEQUENCE SET     X   SELECT pg_catalog.setval('lacentro.users_usermodel_user_permissions_id_seq', 1, false);
          lacentro          docker    false    191            7
           0    0    customers_client_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.customers_client_id_seq', 33, true);
          public          docker    false    175            8
           0    0    django_migrations_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.django_migrations_id_seq', 39, true);
          public          docker    false    173            �	      x������ � �      �	   �   x�e�[�� E��Ō��9{i�����l��ݏ�CJ�d����8`��u�+��8��/e�������V�Q��F�������i;@h��H��G��Uu)����gA!IQ�u~�I����w����b��'K������~&iF7@�w��,`��Ľq��,6��ۯ�m4�P�6�/�Ǖ�H=��G/���X	��f��      �	   �  x�m�ێ�0�����	��S���J"n5�վ}a�o�����3?Np?���n������w�0�.���KU|	\�ٍ���X4t�->��X4t��!��أd�Fl�>�k�M��JԅT|kt-˾
?_����/J��h��k2�/ݸ�
T�ه���}�#$h3FH��Rl ڮ��/q�$�L�����B9Nb���~yyڎVts�-}N��c���k@>\�p"Ȕ��vL�T�D+!��@�i��R�}�ѵ胥��K��f5͛�d<[j^�%�QX���9.�a]�d��Y
�4y1$	kؤ��d�a����uR���.����WYRp?%�,)��� b�� %�%)kD�+8��W&G�L&#��� >	��L�b�Q�/��5�� k_���5I0(�%�Vy0 
&�x�qqo���9��kfHLa&������3B
���/�x�m� x�k3��x&�̺&9��T��9�d�dʧ����p�3肐Sfօ"'�Ը>L����t{��x-��7f�į���+��̩�W��9gg���ߨ��o.����ӓ���S4m�8S[{ʏ�4��I�3��xiϾ5�m2F�d�	�CBł��w��Ĺ[�T�[t���e����MW���F{7�iL�5�{�MM�m�������F      �	      x������ � �      �	      x������ � �      �	      x������ � �      �	     x���ݎ�0���S��j���T�,�f-�����6	I��������̙cCӆav�<_G75�0~�]��/H����A���b�j�I��)�Dׇ�3�&1��]�)�4�hc����r���m
4��]4����&�R����tn8��j(M��Q|C�j�����w��JCb��gJ~�v�8Ou'�C��ψ�N���٧���n��Z��PC�e�]|ܶQ�d�cu��HXf�!o}\l�Ovq2�t2.�M�ɞ�����4 NU�ٳX�=l �͟�H�M�w���2����$V[n�2&��c��>��fOb $
�5y�ݓ�4L�,��S�}�8�xh0�)%"^�6��j�F4_�}@r&l;����g�~�V��`�HXa�i�i�[Ӄ�W�t�K�l�u_���Z�+�C�)�.)�k�R��UKWǲ��CASӢ�q�������:BS!EA�&��aN�ŧ����4/W���m�&,]����\�m�fr�p��W�$-�>�q��      

      x������ � �      �	      x������ � �      �	      x������ � �      �	      x������ � �      
      x������ � �      �	      x������ � �      �	      x������ � �      
      x������ � �      
      x������ � �      
      x������ � �      	
      x������ � �      �	      x������ � �      �	      x������ � �      �	      x������ � �      �	   �   x�e�[�� E��Ō��9{i�����l��ݏ�CJ�d����8`��u�+��8��/e�������V�Q��F�������i;@h��H��G��Uu)����gA!IQ�u~�I����w����b��'K������~&iF7@�w��,`��Ľq��,6��ۯ�m4�P�6�/�Ǖ�H=��G/���X	��f��      �	   �  x�m�ێ�0�����	��S���J"n5�վ}a�o�����3?Np?���n������w�0�.���KU|	\�ٍ���X4t�->��X4t��!��أd�Fl�>�k�M��JԅT|kt-˾
?_����/J��h��k2�/ݸ�
T�ه���}�#$h3FH��Rl ڮ��/q�$�L�����B9Nb���~yyڎVts�-}N��c���k@>\�p"Ȕ��vL�T�D+!��@�i��R�}�ѵ胥��K��f5͛�d<[j^�%�QX���9.�a]�d��Y
�4y1$	kؤ��d�a����uR���.����WYRp?%�,)��� b�� %�%)kD�+8��W&G�L&#��� >	��L�b�Q�/��5�� k_���5I0(�%�Vy0 
&�x�qqo���9��kfHLa&������3B
���/�x�m� x�k3��x&�̺&9��T��9�d�dʧ����p�3肐Sfօ"'�Ը>L����t{��x-��7f�į���+��̩�W��9gg���ߨ��o.����ӓ���S4m�8S[{ʏ�4��I�3��xiϾ5�m2F�d�	�CBł��w��Ĺ[�T�[t���e����MW���F{7�iL�5�{�MM�m�������F      �	      x������ � �      �	   �   x�]�O�0@��St�&�o��)HuH"�+BL�SJ]E߾u�񎏇Q��ˊ��Z�l��`7��<�"a��ņ���e"�x��6q֯�y�Ss�*�0+.;�SldLC�CB]�� i$���ŀ堚NI�E%���-��4���|�d����e}�2�      �	   �   x����
�@���x2�H���:@%ED��ӉҲ�(�{F���_|����DP��{�xȱ����~�?��[3�z�N�]�פ�T<�M�	�j��`�(��2��3��sU~��Y���ڜ��S؉0Ju���D��ǀ�䩜8����]Umf��u�h�,W�U��q.Rm���'���x�N      �	     x���M��0����M�*��YF��ē��6un?�!$Q;J$����^=�!����2��!��񽟼m$H�@z�/��?��aL�߄���Mt]8;��0���m��(� �Q�����FqΤ(�٦@c��E3���q��/Mg�M��S�����f�PtE�c:\g}���	QDe��(잒��N��	B�!7�G�v�LN>6�uc4H�X�6�H���}��Q�d�eu�T�zcȵ��m��N!��������8ړ{2%�X@6��Z��cF�Ml$�á�P�+YPxEYQ���=�zih.����3Cߗ�4>�Gh�Ea�&���}Z)�eɐ2{�|��F\'7�<�D���Ʀ1B^m���e���7H΄=L���k��>�?T�!�@���{�9�����`W�t��s�l����l�_�G���t�PU���𨥋aY�Aʡ���/YA|D��4TU��� hr�0���S��O����YM��6@�����C���țѭ�~Y_p�D	���n�����      �	     x�=��n�@@�<E��f�GZ5���� sI7\Jg�* O_�E�'�rnuw��2ʏ��R�h��mס����]�T"G	�fIl�%(�'WNK`:�5k#$y�Ж�j�_R?iry%�Z�"NJU�#23\��*k�fm$g_�{5��Q�E�m�[�����qr�"E����r��|h	�&o#s��_wX�һ ���5e�Z90���i���_\"jӇa��&�1�̰)���f� �1���	{�ڀ���,�r���� \�h{      �	   R   x�3�t�/(I�I-��CF\Ɯ9�%�Ŝ%(�&�ΩEI�U�L9C�՛q:�''�d���c�0�tJM�L������ �l((      �	      x�3��M-NT0�2�0��b���� E!      �	      x�3���4\��!W� ;r$      �	      x�3�L�O��K�2�LJ,*J����� H7�      �	   �   x�}�KR�0�u�9E�� ��M�"VCSI�x+���&��c	N��_��'�0B~�(KHp:�ʀU�-������N�\�k��d�'���w������}ua��
�j�'����$�2�j�6��$����|�3j�?~�D�y��xu��ٙ�����Ѕ�~vs��	��:"G�k��䆍��yJa�V�$�e�lg�]\�^�ɨ�\Ow�y*�Rg��}      �	   (   x�3���4�4�2�0����@,c���9�i����� ��%      �	   �   x�e��N�0  �sy
�FR
�P�6�A\�1�@q��+?�<���|��1;�k��^�Da@ޭekC�K���G좸�n2 ��� C5���j W���� &�S�\NY������(�7��n�J�z���|5�s�)̻�O	k	�~�w�RG���N9�}㛦�S;�YT�:HE���1$x��Su���J@_���I]���#@���yB��B[��.���<C�mK�M��c���i�f�O       �	   {  x���KO�@���+��;s��� j�V¦@� Ph��o�)��I��;9�/'�Is�4���v&����N:y2n �a�����l�6�E��+ ���϶A=���:!H詣�;�
<t�K�>���*�&ؽ1�.�Y��ôl���媄�fITMUT���@�R�
�&��~+�s���I��l�m`��t/P�>���+.Ŏ��Qg)��R��w�v;maЊz��[D��Пx�6,iܔPL�4�K#YUT��L�ߨS�C�QH4����U�u�u���F�����������٨,#E�J5;�QVF��L(J�{�M�Mi��6�3��.��{ǡ��᪄��1Kka���*:��_K����S#�V�}�4�s      �	      x������ � �      �	   I  x�u�[o�0����)v���{���S�	pxb����y@Q>���������O�2��Ǐl���v';���P.Ҁ��o�1DF���'��
���sS<<�~��M�]ĐN��8�k��`�z���Z��q�ǨXT�) :g`R^u��`�c�M/nۜ4�U�I����1�{���bq���siʿ�U�KG����=��	���]�q�h�:lO�e-��XT".^�II�q��(ȏ��Q�'�8��x`��W��{�T *�U�(*tɅ!ȁ�Ft�v�,�o��븑�b�vr�����~�Iňn���﹭�tf��iߡ��M      �	      x������ � �      �	      x������ � �      �	   s   x�3�̭�M��M���K���,(M��L�N�H�M,V��K��4204�54�50�Lr�t�Ȝˈ3'195��(_��0�4�jD	�Ɯ�99�IE�h&@E����ˀ=... x�7g      �	   E  x����n�0���S�~��3�ϳ�dY�7�855o��IH�u$��of��C&7L���Ɔ�~�k� ��o{���[�(J���~S���gnL�bۻ:�3�2�6v��7��S�lU����9���q�a(Mo?M�S��������+��P�^���{IQ��)b�����*��4�Z�!W����8�.�|l�����V�V�H���}\�Q�d�euPeze�[#����B�=��1Dӻq�'WK c��dũ�5/<�^fXI��C�PLhQ�xG��N1��m.�@�����r����KpG�Z�`Maù�3]r)���4J�ҩxH0�)�!^�5�^��"����H�=L������ރ?��
	�2�j�8�~���LR�E�?\Re�tR�E��Y�&�c�]T�j���𬥋cY�Aʡ�P-�L��������:BQ�8��	9n�3v��W���z����xo4a�� Ex�������n�~Y)*U�O�=��7 �|B���=S��J,+��qV��G�ߧ[�Uo���D��+NK���n����1     