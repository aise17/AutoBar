PGDMP                     	    x           docker    9.3.17    12.4 V    
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
                docker    false            �	          0    25021 
   auth_group 
   TABLE DATA           /   COPY ellibra.auth_group (id, name) FROM stdin;
    ellibra          docker    false    223   JR       �	          0    25003    django_content_type 
   TABLE DATA           D   COPY ellibra.django_content_type (id, app_label, model) FROM stdin;
    ellibra          docker    false    219   gR       �	          0    25013    auth_permission 
   TABLE DATA           O   COPY ellibra.auth_permission (id, name, content_type_id, codename) FROM stdin;
    ellibra          docker    false    221   CS       �	          0    25031    auth_group_permissions 
   TABLE DATA           N   COPY ellibra.auth_group_permissions (id, group_id, permission_id) FROM stdin;
    ellibra          docker    false    225   �U       �	          0    25065    users_usermodel 
   TABLE DATA           �   COPY ellibra.users_usermodel (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined, date_of_birth, image) FROM stdin;
    ellibra          docker    false    227   V       �	          0    25123    django_admin_log 
   TABLE DATA           �   COPY ellibra.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
    ellibra          docker    false    233   #V       �	          0    24992    django_migrations 
   TABLE DATA           D   COPY ellibra.django_migrations (id, app, name, applied) FROM stdin;
    ellibra          docker    false    217   @V       

          0    25369    django_session 
   TABLE DATA           Q   COPY ellibra.django_session (session_key, session_data, expire_date) FROM stdin;
    ellibra          docker    false    254   DX       �	          0    25147    inventary_category 
   TABLE DATA           �   COPY ellibra.inventary_category (id, name, publish, publish_date, creation_date, modification_date, unpublish_date) FROM stdin;
    ellibra          docker    false    235   aX       �	          0    25158    inventary_mesa 
   TABLE DATA           3   COPY ellibra.inventary_mesa (id, name) FROM stdin;
    ellibra          docker    false    237   ~X       �	          0    25166    inventary_orders 
   TABLE DATA           {   COPY ellibra.inventary_orders (id, creation_date, orders_status_cocina, orders_status_barra, mesa_id, user_id) FROM stdin;
    ellibra          docker    false    239   �X       �	          0    25174    inventary_preparationsite 
   TABLE DATA           >   COPY ellibra.inventary_preparationsite (id, name) FROM stdin;
    ellibra          docker    false    241   �X       �	          0    25182    inventary_product 
   TABLE DATA           �   COPY ellibra.inventary_product (id, name, image, description, allergy, price, publish, publish_date, creation_date, modification_date, unpublish_date, category_id, preparation_site_id) FROM stdin;
    ellibra          docker    false    243   �X       
          0    25193    inventary_ordersproducts 
   TABLE DATA           d   COPY ellibra.inventary_ordersproducts (id, creation_date, order_product_id, product_id) FROM stdin;
    ellibra          docker    false    245   �X       
          0    25237    oauth2_provider_application 
   TABLE DATA           �   COPY ellibra.oauth2_provider_application (id, client_id, redirect_uris, client_type, authorization_grant_type, client_secret, name, user_id, skip_authorization, created, updated) FROM stdin;
    ellibra          docker    false    247   Y       
          0    25250    oauth2_provider_accesstoken 
   TABLE DATA           �   COPY ellibra.oauth2_provider_accesstoken (id, token, expires, scope, application_id, user_id, created, updated, source_refresh_token_id) FROM stdin;
    ellibra          docker    false    249   ,Y       
          0    25263    oauth2_provider_grant 
   TABLE DATA           �   COPY ellibra.oauth2_provider_grant (id, code, expires, redirect_uri, scope, application_id, user_id, created, updated, code_challenge, code_challenge_method) FROM stdin;
    ellibra          docker    false    251   IY       	
          0    25276    oauth2_provider_refreshtoken 
   TABLE DATA           �   COPY ellibra.oauth2_provider_refreshtoken (id, token, access_token_id, application_id, user_id, created, updated, revoked) FROM stdin;
    ellibra          docker    false    253   fY       �	          0    25078    users_usermodel_groups 
   TABLE DATA           M   COPY ellibra.users_usermodel_groups (id, usermodel_id, group_id) FROM stdin;
    ellibra          docker    false    229   �Y       �	          0    25086     users_usermodel_user_permissions 
   TABLE DATA           \   COPY ellibra.users_usermodel_user_permissions (id, usermodel_id, permission_id) FROM stdin;
    ellibra          docker    false    231   �Y       �	          0    24631 
   auth_group 
   TABLE DATA           0   COPY lacentro.auth_group (id, name) FROM stdin;
    lacentro          docker    false    184   �Y       �	          0    24613    django_content_type 
   TABLE DATA           E   COPY lacentro.django_content_type (id, app_label, model) FROM stdin;
    lacentro          docker    false    180   �Y       �	          0    24623    auth_permission 
   TABLE DATA           P   COPY lacentro.auth_permission (id, name, content_type_id, codename) FROM stdin;
    lacentro          docker    false    182   �Z       �	          0    24641    auth_group_permissions 
   TABLE DATA           O   COPY lacentro.auth_group_permissions (id, group_id, permission_id) FROM stdin;
    lacentro          docker    false    186   \]       �	          0    24675    users_usermodel 
   TABLE DATA           �   COPY lacentro.users_usermodel (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined, date_of_birth, image) FROM stdin;
    lacentro          docker    false    188   y]       �	          0    24733    django_admin_log 
   TABLE DATA           �   COPY lacentro.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
    lacentro          docker    false    194   4^       �	          0    24602    django_migrations 
   TABLE DATA           E   COPY lacentro.django_migrations (id, app, name, applied) FROM stdin;
    lacentro          docker    false    178   
_       �	          0    24979    django_session 
   TABLE DATA           R   COPY lacentro.django_session (session_key, session_data, expire_date) FROM stdin;
    lacentro          docker    false    215   a       �	          0    24757    inventary_category 
   TABLE DATA           �   COPY lacentro.inventary_category (id, name, publish, publish_date, creation_date, modification_date, unpublish_date) FROM stdin;
    lacentro          docker    false    196   1b       �	          0    24768    inventary_mesa 
   TABLE DATA           4   COPY lacentro.inventary_mesa (id, name) FROM stdin;
    lacentro          docker    false    198   �b       �	          0    24776    inventary_orders 
   TABLE DATA           |   COPY lacentro.inventary_orders (id, creation_date, orders_status_cocina, orders_status_barra, mesa_id, user_id) FROM stdin;
    lacentro          docker    false    200   �b       �	          0    24784    inventary_preparationsite 
   TABLE DATA           ?   COPY lacentro.inventary_preparationsite (id, name) FROM stdin;
    lacentro          docker    false    202   c       �	          0    24792    inventary_product 
   TABLE DATA           �   COPY lacentro.inventary_product (id, name, image, description, allergy, price, publish, publish_date, creation_date, modification_date, unpublish_date, category_id, preparation_site_id) FROM stdin;
    lacentro          docker    false    204   5c       �	          0    24803    inventary_ordersproducts 
   TABLE DATA           e   COPY lacentro.inventary_ordersproducts (id, creation_date, order_product_id, product_id) FROM stdin;
    lacentro          docker    false    206   *d       �	          0    24847    oauth2_provider_application 
   TABLE DATA           �   COPY lacentro.oauth2_provider_application (id, client_id, redirect_uris, client_type, authorization_grant_type, client_secret, name, user_id, skip_authorization, created, updated) FROM stdin;
    lacentro          docker    false    208   �d       �	          0    24860    oauth2_provider_accesstoken 
   TABLE DATA           �   COPY lacentro.oauth2_provider_accesstoken (id, token, expires, scope, application_id, user_id, created, updated, source_refresh_token_id) FROM stdin;
    lacentro          docker    false    210   �e       �	          0    24873    oauth2_provider_grant 
   TABLE DATA           �   COPY lacentro.oauth2_provider_grant (id, code, expires, redirect_uri, scope, application_id, user_id, created, updated, code_challenge, code_challenge_method) FROM stdin;
    lacentro          docker    false    212   g       �	          0    24886    oauth2_provider_refreshtoken 
   TABLE DATA           �   COPY lacentro.oauth2_provider_refreshtoken (id, token, access_token_id, application_id, user_id, created, updated, revoked) FROM stdin;
    lacentro          docker    false    214   .g       �	          0    24688    users_usermodel_groups 
   TABLE DATA           N   COPY lacentro.users_usermodel_groups (id, usermodel_id, group_id) FROM stdin;
    lacentro          docker    false    190   �h       �	          0    24696     users_usermodel_user_permissions 
   TABLE DATA           ]   COPY lacentro.users_usermodel_user_permissions (id, usermodel_id, permission_id) FROM stdin;
    lacentro          docker    false    192   �h       �	          0    24589    customers_client 
   TABLE DATA           o   COPY public.customers_client (id, domain_url, schema_name, name, paid_until, on_trial, created_on) FROM stdin;
    public          docker    false    176   �h       �	          0    24578    django_migrations 
   TABLE DATA           C   COPY public.django_migrations (id, app, name, applied) FROM stdin;
    public          docker    false    174   Di       
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
          ellibra          docker    false    236            
           0    0    inventary_orders_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('ellibra.inventary_orders_id_seq', 1, false);
          ellibra          docker    false    238            
           0    0    inventary_ordersproducts_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('ellibra.inventary_ordersproducts_id_seq', 1, false);
          ellibra          docker    false    244            
           0    0     inventary_preparationsite_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('ellibra.inventary_preparationsite_id_seq', 1, false);
          ellibra          docker    false    240            
           0    0    inventary_product_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('ellibra.inventary_product_id_seq', 1, false);
          ellibra          docker    false    242            
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
          lacentro          docker    false    197            ,
           0    0    inventary_orders_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('lacentro.inventary_orders_id_seq', 39, true);
          lacentro          docker    false    199            -
           0    0    inventary_ordersproducts_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('lacentro.inventary_ordersproducts_id_seq', 39, true);
          lacentro          docker    false    205            .
           0    0     inventary_preparationsite_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('lacentro.inventary_preparationsite_id_seq', 2, true);
          lacentro          docker    false    201            /
           0    0    inventary_product_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('lacentro.inventary_product_id_seq', 13, true);
          lacentro          docker    false    203            0
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
          public          docker    false    173            �	      x������ � �      �	   �   x�e�[�� E��Ō��s�2�7E�P)��CJ�d����Z��_V���\�s�I8l��lV��	w;�K��|Q��� ����j�����^RiUY2�z�'�Y�Yc0�:?ɤR3���ۻ@�7Ɛ`����DP�_��(#�H�to��mZ��ܭhdsH�m��aŲrv��.���R���i��R��_��S���      �	   �  x�m�[n�@E��W�
Fi^��g�F�8hl@�'�������OY�^�w7��Zt�|�n���O���/��?��3������{�r�����?�ό=F�lĶ����/��D]�ķFײ���8+���-��
�$��ҍ��@�}xӖ|Nz�m�)R��A�U2X��%�$[�	�P6�Z(�I�n4�/� O�ъn΃��Oɾ�q���Ƈ�N�2tю	"9��7�J�0�d�}Tl_st-�����t%�YM�-ϖ�W}�h֬4f��cXףY'p��/M_I�6m10�jXuŠ��Aݔ�9�35e��U�<OM$k
"�)��� @M�ci�Q�t�+Sa�#a���K�T��H��ӭ������o�Cj���LGb��&��Z�>�V<׸��_���1���kSfHLa�����T�!�H���F�M�6~ ���&��z&�d]�\�D��k+�(I�#���=8�}cB��d���8d���8���J§����
��oL�!�L��"�T��&$���n�o|�[t_�j~�}c��j�_W��I��E~ue�����5|��KA=�t}��-=�������O\e��t���f�Ȏ�&��������O}�����1�����|�5Y;�1K*9i������>�F      �	      x������ � �      �	      x������ � �      �	      x������ � �      �	   �  x���ݎ�0���S��j���ϳ�E�e"�M7m����谢�H�7��l��!����2�� ��SpmC@��O�@���`��PJ��ѓ�l�]<{{{a�ۻί�0�EA�����vq�P������k'���S�1ľV������O��g�Hq^PbA�j��w.��ƅ��"
��Gm'Ӹ��� �Z�Ѻq�m<�<�ܮ�!�`�����;�������^0���0C�9�6��h��h}J1�Ώ�;�ci.e]ӫ�lylg�/ąd�z�(I��"�Q7�)�yx��-�E���vH����u{P�6Wo����5Ƙ��9��.��RL��.��*yʉH����1bY�*��4��
�o���L��Tn�O�N����E0I�׎ts��)voMϘXe�	�9v�-�\#�%�_G6�c.]3������&�MSY�9d�veŕ�:(њ������5�U��dPUkFK�f}��Bu��~���4^�S      

      x������ � �      �	      x������ � �      �	      x������ � �      �	      x������ � �      �	      x������ � �      �	      x������ � �      
      x������ � �      
      x������ � �      
      x������ � �      
      x������ � �      	
      x������ � �      �	      x������ � �      �	      x������ � �      �	      x������ � �      �	   �   x�e�[�� E��Ō��s�2�7E�P)��CJ�d����Z��_V���\�s�I8l��lV��	w;�K��|Q��� ����j�����^RiUY2�z�'�Y�Yc0�:?ɤR3���ۻ@�7Ɛ`����DP�_��(#�H�to��mZ��ܭhdsH�m��aŲrv��.���R���i��R��_��S���      �	   �  x�m�[n�@E��W�
Fi^��g�F�8hl@�'�������OY�^�w7��Zt�|�n���O���/��?��3������{�r�����?�ό=F�lĶ����/��D]�ķFײ���8+���-��
�$��ҍ��@�}xӖ|Nz�m�)R��A�U2X��%�$[�	�P6�Z(�I�n4�/� O�ъn΃��Oɾ�q���Ƈ�N�2tю	"9��7�J�0�d�}Tl_st-�����t%�YM�-ϖ�W}�h֬4f��cXףY'p��/M_I�6m10�jXuŠ��Aݔ�9�35e��U�<OM$k
"�)��� @M�ci�Q�t�+Sa�#a���K�T��H��ӭ������o�Cj���LGb��&��Z�>�V<׸��_���1���kSfHLa�����T�!�H���F�M�6~ ���&��z&�d]�\�D��k+�(I�#���=8�}cB��d���8d���8���J§����
��oL�!�L��"�T��&$���n�o|�[t_�j~�}c��j�_W��I��E~ue�����5|��KA=�t}��-=�������O\e��t���f�Ȏ�&��������O}�����1�����|�5Y;�1K*9i������>�F      �	      x������ � �      �	   �   x�]�O�0���|�I��p:� �IDE�M�EWѻo]{����^V�6֜P����搝Zd#,�6߰Z]W��Od��DlSg����;�Q�V��Yq��x��bß`a�bR?t �F��;���(�tJj�+�P-onѵ��+��z�  �J�V�Z����3�      �	   �   x����
�@���x2�H���:@%ED��ӉҲ�(�{F���_|����DP��{�xȱ����~�?��[3�z�N�]�פ�T<�M�	�j��`�(��2��3��sU~��Y���ڜ��S؉0Ju���D��ǀ�䩜8����]Umf��u�h�,W�U��q.Rm���'���x�N      �	   �  x���ݎ�0���S��j���<K%�"n�`ֆh���M��Zo�����͜�3�t~��8Ϸ�Ɔڍnv�o� ��i�8�<qu���OB�E�:��_������`�(�T����Y���H�E�6j��6�Ɇ����X*��|�ގ��W%P)�(��������q�.EJ"y���)�U������,#��ψ��Y��⒱���aXܴD�m�/.l�({�yd�0����1佑�����>Dm�gmC�A6Fs�u[�JXWdõ���̘r�Pl$�eB/�$C���( w�%�ez��؂��)M��)���S��a %����l��c�c�<H�=nܗp�E#�qJ��σM.|�l"R�j���> 9�������Ewo�u��B0��j�m�%�~xɼqmB5n���&��u��˅"�W�ڇs�]2T�*\�^�7�y�W�d��ܞ9B�ZYr�XS�:u$�K�
-�USt�
�&�{�v��������p�N��      �	     x�=��n�@@�<E��f�GZ5���� sI7\Jg�* O_�E�'�rnuw��2ʏ��R�h��mס����]�T"G	�fIl�%(�'WNK`:�5k#$y�Ж�j�_R?iry%�Z�"NJU�#23\��*k�fm$g_�{5��Q�E�m�[�����qr�"E����r��|h	�&o#s��_wX�һ ���5e�Z90���i���_\"jӇa��&�1�̰)���f� �1���	{�ڀ���,�r���� \�h{      �	   R   x�3�t�/(I�I-��CF\Ɯ9�%�Ŝ%(�&�ΩEI�U�L9C�՛q:�''�d���c�0�tJM�L������ �l((      �	      x�3��M-NT0�2�0��b���� E!      �	   :   x�3��4202�5"C3+CK+S=Ss##3Cm�4 4�4�2%R���
c���� �b�      �	      x�3�L�O��K�2�LJ,*J����� H7�      �	   �   x�}�KR�0�u�9E�� ��M�"VCSI�x+���&��c	N��_��'�0B~�(KHp:�ʀU�-������N�\�k��d�'���w������}ua��
�j�'����$�2�j�6��$����|�3j�?~�D�y��xu��ٙ�����Ѕ�~vs��	��:"G�k��䆍��yJa�V�$�e�lg�]\�^�ɨ�\Ow�y*�Rg��}      �	   S   x�m���0����S���L��� �C���ɦ�K�����-b��ŰQ�8,�7k�|Ԓj'βB_�_9�o�u&U���      �	   �   x�e��N�0  �sy
�FR
�P�6�A\�1�@q��+?�<���|��1;�k��^�Da@ޭekC�K���G좸�n2 ��� C5���j W���� &�S�\NY������(�7��n�J�z���|5�s�)̻�O	k	�~�w�RG���N9�}㛦�S;�YT�:HE���1$x��Su���J@_���I]���#@���yB��B[��.���<C�mK�M��c���i�f�O       �	   {  x���KO�@���+��;s��� j�V¦@� Ph��o�)��I��;9�/'�Is�4���v&����N:y2n �a�����l�6�E��+ ���϶A=���:!H詣�;�
<t�K�>���*�&ؽ1�.�Y��ôl���媄�fITMUT���@�R�
�&��~+�s���I��l�m`��t/P�>���+.Ŏ��Qg)��R��w�v;maЊz��[D��Пx�6,iܔPL�4�K#YUT��L�ߨS�C�QH4����U�u�u���F�����������٨,#E�J5;�QVF��L(J�{�M�Mi��6�3��.��{ǡ��᪄��1Kka���*:��_K����S#�V�}�4�s      �	      x������ � �      �	   I  x�u�[o�0����)v���{���S�	pxb����y@Q>���������O�2��Ǐl���v';���P.Ҁ��o�1DF���'��
���sS<<�~��M�]ĐN��8�k��`�z���Z��q�ǨXT�) :g`R^u��`�c�M/nۜ4�U�I����1�{���bq���siʿ�U�KG����=��	���]�q�h�:lO�e-��XT".^�II�q��(ȏ��Q�'�8��x`��W��{�T *�U�(*tɅ!ȁ�Ft�v�,�o��븑�b�vr�����~�Iňn���﹭�tf��iߡ��M      �	      x������ � �      �	      x������ � �      �	   s   x�3�̭�M��M���K���,(M��L�N�H�M,V��K��4204�54�50�Lr�t�Ȃˈ3'195��(_��0�4�jD	�Ɯ�99�IE�h&@E����ˀ=... y�7j      �	   �  x���ݎ� �����}�3�7�R	��f�l�m޾��N��r��1��̙@w�S�SJ��Ǝ�M.93tH�����?�A�|����$�ߔ������]��Ɍ������wfI���U���<j3$�l��bt~���h>�`�K>��d�6TG-1?�hܰK��S(|��gJy���9�6B0PPbC�g�`b҃����2�m�D
�Dn�g񱸰�NI���B�a��!�����M�!js>k�z�1��m��9pYod�ɦ5;s���I}s�� ��-~���Q����5�V̖[ ���"���?oOql�#���ʠ]��͓�LM�ОG7����$Vh�*G"ܾ6���l���ET�x@���RY�?���ӻw��$C!�n����ǽ���0��z	չ�+�p��!�a�zH�ա��k����b�ΗQc���e�~�^Hū��-5��#Eh�W��M�)����������敮y��v8�Uߞ     