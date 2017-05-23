FROM microsoft/dotnet:1.1-runtime

WORKDIR /var/service

COPY docker-entrypoint.sh /bin
COPY dist .

EXPOSE 5000/tcp
ENV ASPNETCORE_URLS http://*:5000
ENV ASPNETCORE_ENVIRONMENT Production

HEALTHCHECK CMD curl --fail http://localhost:5000/ || exit 1

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["holmescode-web"]
