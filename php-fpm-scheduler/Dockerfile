FROM php:7.3.6-fpm-stretch

RUN apt-get update \
    && apt-get -y install libpq-dev libpng-dev git zip gnupg2 libzip-dev mysql-client libgmp-dev \
    && apt-get -y clean all \
    && docker-php-ext-install pdo pcntl
    # && docker-php-ext-install pdo pdo_pgsql pgsql pcntl
# Instala WKHTMLtoPDF
# RUN apt-get -y install wkhtmltopdf xvfb xauth xfonts-base xfonts-75dpi fontconfig \
#     && echo 'xvfb-run --server-args="-screen 0, 1024x768x24" /usr/bin/wkhtmltopdf $*' > /usr/bin/wkhtmltopdf.sh \
#     && chmod a+rx /usr/bin/wkhtmltopdf.sh \
#     && ln -s /usr/bin/wkhtmltopdf.sh /usr/local/bin/wkhtmltopdf
# Instala suporte SqlServer
# ENV ACCEPT_EULA=Y
# RUN apt-get update \
#     && curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
#     && curl https://packages.microsoft.com/config/debian/8/prod.list \
#         > /etc/apt/sources.list.d/mssql-release.list \
#     && apt-get install -y --no-install-recommends \
#         locales \
#         apt-transport-https \
#     && echo "en_US.UTF-8 UTF-8" > /etc/locale.gen \
#     && locale-gen \
#     && apt-get update \
#     && apt-get -y --no-install-recommends install \
#         msodbcsql17 \
#         unixodbc-dev

RUN docker-php-ext-install \
    mbstring \
    pdo \
    pdo_mysql \
    mysqli \
    gd \
    mbstring \
    opcache \
    zip \
    bcmath \
    gmp
    # Suporte SQLServer
    # && pecl install sqlsrv pdo_sqlsrv \
    # && docker-php-ext-enable sqlsrv pdo_sqlsrv

# Install xdebug
# RUN yes | pecl install xdebug \
#     && echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" > /usr/local/etc/php/conf.d/xdebug.ini \
#     && echo "xdebug.remote_enable=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
#     && echo "xdebug.remote_handler=dbgp" >> /usr/local/etc/php/conf.d/xdebug.ini \
#     && echo "xdebug.remote_port=9000" >> /usr/local/etc/php/conf.d/xdebug.ini \
#     && echo "xdebug.remote_autostart=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
#     && echo "xdebug.remote_connect_back=0" >> /usr/local/etc/php/conf.d/xdebug.ini \
#     && echo "xdebug.idekey=docker" >> /usr/local/etc/php/conf.d/xdebug.ini

RUN curl -sS https://getcomposer.org/installer | php ;mv composer.phar /usr/local/bin/composer;
# RUN composer global require hirak/prestissimo
# RUN composer global require phpunit/phpunit

# php.ini de producao
#RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
# Sobrepondo as variaveis do php
COPY config/variaveis.ini $PHP_INI_DIR/conf.d/