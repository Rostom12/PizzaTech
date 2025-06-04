export function errorHandler(err, req, res, next) {
    console.error('[ERREUR]', err)

    if (err.code === 'P2025') {
        return res.status(404).json({ error: 'Élément non trouvé (Prisma)' })
    }

    res.status(500).json({ error: err.message || 'Erreur serveur' })
}
